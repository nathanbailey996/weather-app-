import {FaTimes } from "react-icons/fa"
function LocationList ({value, dispatch, toggleHome}){
const handleChangeLocation = ()=>{
    dispatch({type:"ChangeCurrentLocation", name:value})
    toggleHome()
}

    return <li style={{cursor:"pointer"}} >
    <button className="remove-location-btn" onClick={()=>{
        dispatch({type:"RemoveLocation", name:value})
    }}><FaTimes style={{opacity:"0.6", margin:"0"}} className="new-location-icon"/>
    </button>
   
    <p onClick={handleChangeLocation} style={{width:"90%", height:"100%"}}>{value}</p>
</li>
}

export default LocationList