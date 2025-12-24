import Navbar from "../components/Navbar";
import SimpleFooter from "../components/SimpleFooter";
import StatGrid from "../components/StatGrid";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    };

    return(
        <>
            <Navbar/>
            <div className = 'flex flex-col items-center justify-center'>
                <div className = 'flex flex-col lg:flex-row w-11/12 lg:w-3/4 justify-between items-center'>
                    <div className = 'flex flex-col gap-4 items-center'>
                        <div className = 'w-48 h-48 rounded-full border-2 overflow-hidden flex items-center justify-center justify-self-start'>
                            <img src="images/goku.png" alt="" />
                        </div>
                    </div>
                    <div className = 'w-11/12 lg:w-3/4'>
                        <div className = 'fle'>

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quos similique, voluptate eligendi aut sapiente assumenda quod non vel obcaecati dolores minus eveniet ea laudantium placeat consectetur veritatis unde alias nemo odit incidunt iste! Similique veritatis sapiente est labore delectus fuga voluptate possimus, tempora quam! Quasi, id sapiente? Aut, natus.</p>
                        </div>
                    </div>
                </div>
                <div className = 'w-11/12 lg:w-3/4'>
                    <StatGrid/>
                </div>
            </div>
            <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
            Logout
            </button>
            <SimpleFooter/>
        </>
    );
}

export default Profile;