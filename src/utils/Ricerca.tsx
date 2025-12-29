import { useState } from 'react';
import { useMap } from 'react-leaflet';

interface RicercaProps {
  onResultFound: (geojson: any) => void;
  onClear: () => void; // Nuova funzione per pulire
}

export default function Ricerca({ onResultFound, onClear }: RicercaProps) {
  const [query, setQuery] = useState('');
  const map = useMap();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&polygon_geojson=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.length > 0) {
        const result = data[0];
        const lat = parseFloat(result.lat);
        const lon = parseFloat(result.lon);

        map.flyTo([lat, lon], 13);

        if (result.geojson) {
            onResultFound(result.geojson); // Passiamo i dati al padre
        }
      } else {
        alert('Nessun risultato trovato');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setQuery('');      
    onClear();          
    map.setZoom(10);    
  };

  return (
    <div className="leaflet-top leaflet-right" style={{ pointerEvents: 'auto', zIndex: 1000 }}>
       <div className="leaflet-control leaflet-bar" style={{ display: 'flex', padding: '5px', background: 'white' }}>
        <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Cerca sentiero"
                style={{ border: 'none', outline: 'none', width: '15rem', height: '2rem' }}
            />
             <button type="submit" style={{ cursor: 'pointer', border: 'none', background: 'white'}}></button>
             
             {query && (
               <button 
                 type="button" 
                 onClick={handleClear}
                 style={{ cursor: 'pointer', border: 'none', background: 'white', color: 'red', fontWeight: 'bold', marginLeft: '5px' }}
               >
                 ✕
               </button>
             )}
        </form>
       </div>
    </div>
  );
}