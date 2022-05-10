import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import LocationList from "./LocationList"


function HamburgerMenu({state, dispatch}){

   const menuStyles = {
       transform: state.isMenuOpen? "": "translateX(-5000px)", 
   }

   const toggleMenu = ()=>{ 
       dispatch({type:"CloseMenu"})
   }



    return(
        <div className="menu-container" style={menuStyles}>
            {/* <button className="close-btn" onClick={toggleMenu}>
                <AiOutlineClose />
            </button>
            <div className="menu-content">
            <h4>My Locations</h4>
           <div>
            {state.allLocationData.map(location=>{
                return <LocationList value={location.name} dispatch={dispatch} key={Math.random()}/>
            })}
            </div>
            </div> */}
        </div>
    )
}

export default HamburgerMenu