import { BiMenu } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import  { FiSettings } from "react-icons/fi"
import {useRouter} from "next/router"
import useTime from "./useTime"

function Navbar({state, dispatch}){
    const router = useRouter()
   

    const toggleLocations = ()=>{
        router.push("/edit-locations")
    }

    const redirectToNewLocation = ()=>{
         router.push("/add-location")
    }

    const toggleSettings = ()=> { 
        router.push("/settings")
    }

    const homeStyles = {
        backgroundColor:state.LightMode? "#72a1f5": "black"
      }
      
     const currentTime =state.currentLocation.current? useTime(state.currentLocation.current.dt, state.currentLocation.timezone_offset/3600 ): ""
    
    return(
        <nav className="navbar" style={homeStyles}>
            <button className="navbar-btn" onClick={toggleLocations}>
                <BiMenu />
            </button>
          
<div className="navbar-locations-container"> 
<p className="location-heading" style={{fontSize:"1.2rem"}}>
   {state.currentLocation.name}
</p>
<p style={{fontSize:"0.9rem"}}>{currentTime}</p>
</div>

<div>
<button className="navbar-btn" onClick={toggleSettings}>
                <FiSettings />
            </button>

 <button className="navbar-btn" onClick={redirectToNewLocation}>
    <AiOutlinePlus />
     </button> 
     </div>



        </nav>
    )
}

export default Navbar