import { AiOutlinePlus } from "react-icons/ai"
import Link from "next/link"
import { AiOutlineArrowLeft } from "react-icons/ai"
import {useRouter} from "next/router"
import LocationList from "./LocationList"


function AddLocationMenu ({state, dispatch}){
    const router = useRouter()

    const toggleHome = ()=>{
        router.push("/")
    }
    return(
        <div className="new-location-menu">
             <div className="back-container" style={{padding:"1rem 0.5rem"}}>
             <button className="back-btn" onClick={toggleHome}>
                 <AiOutlineArrowLeft />
             </button>
             <p>Locations</p>
         </div>
            <div className="new-location-menu-container">
            <div className="edit-location">
                <ul>
                    <li className="edit-location-li">Edit locations<Link href="/" onClick={toggleHome}>Done</Link></li>
                    <li><AiOutlinePlus className="new-location-icon"/> Add City</li>
                </ul>
            </div>
            <p className="my-locations-title">My Locations <span>-click a location to select</span></p>
            <ul>
{state.allLocationData.map(location =>{
    return <LocationList  value={location.name} dispatch={dispatch} toggleHome={toggleHome} key={Math.random()}/>
})}
            </ul>
          
        </div>
        </div>
    )
}

export default AddLocationMenu


{/* <li>
        <button className="remove-location-btn"><FaTimes style={{opacity:"0.6", margin:"0"}} className="new-location-icon"/></button>
        {location.name}
    </li> */}