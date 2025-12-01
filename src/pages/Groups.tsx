import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import Section from "../components/Section.tsx";
import FormGruppo from "../components/FormGruppo.tsx";
import {useState} from 'react'

function Groups() {

    const [FormAperta, setForm] = useState(false);

    return (
        <>
            <Navbar />
            <Section>
                <h1 className="justify-self-center text-mine-shaft-950 text-6xl lg:text-8xl p-12 font-bold text-shadow-sm text-shadow-mine-shaft-50">
                    Trova la tua comunità
                </h1>
                <p className="justify-self-center p-8 text-mine-shaft-950 text-xl">
                    Entra in contatto con altri escursionisti, unisciti ad avventure di
                    gruppo e scopri nuovi sentieri insieme. La montagna chiama, e tu non
                    se solo
                </p>
            </Section>
            <div className="w-full flex justify-center ">
                <button 
                    className="text-mine-shaft-50 font-bold bg-mine-shaft-950 w-48 h-16 rounded-buttons cursor-pointer transition delay-100 duration-300 ease-in-out hover:translate-y-1"
                    onClick={() => setForm(true)}
                >
                    CREA UN GRUPPO
                </button>
            </div>
            <FormGruppo 
                isOpen={FormAperta} 
                onClose={() => setForm(false)} 
            />            <div className = "">

            </div>
            <Footer />
        </>
    );
}

export default Groups;
