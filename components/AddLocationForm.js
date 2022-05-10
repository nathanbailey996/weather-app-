import {useEffect, useState} from "react"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import {useRouter} from "next/router"
import axios from "axios"
import AutoCompleteItem from "./AutoCompleteItem"

 function AddLocationForm ({dispatch}){
const router = useRouter()
const [location, setLocation] = useState("")
const [coordinates, setCoordinates] = useState("null")
const [listOfCities, setListOfCities] = useState([])
const [matchingCitiesArray, setMatchingCitiesArray] = useState([])
const [selectedAutoCompleteLocation, setSelectedAutoCompleteLocation] = useState(null)

const coordinateUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${selectedAutoCompleteLocation? selectedAutoCompleteLocation:location}&limit=5&appid=d678350f131c461c63d5bd106622d976`; 
console.log(coordinates)

const handleSubmit = (e)=> {
e.preventDefault()
axios.get(coordinateUrl)
.then(res=> setCoordinates({
    lat:res.data[0].lat, 
    lon:res.data[0].lon, 
    name:res.data[0].name
}))
.catch(err=> alert(err.messsage))
}

const submitAutoCompleteLocation = (name)=>{
    axios.get(coordinateUrl)
.then(res=> setCoordinates({
    lat:res.data[0].lat, 
    lon:res.data[0].lon, 
    name:name
}))
.catch(err=> alert(err.messsage))
}


function addLocation(){
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude={part}&appid=d678350f131c461c63d5bd106622d976`
    console.log(url)
        axios.get(url)
           .then(res=> dispatch({type:"AddLocation", data:{name:coordinates.name, ...res.data}}))
           .catch(err=> alert(err.message))
           alert(`${coordinates.name} was added`)
           setLocation("")
           router.push("/")
        
}

useEffect(()=>{
    if(coordinates !== "null"){
   addLocation()
    }
}, [coordinates])

const handleChange = (e)=>{
const {value} = e.target
setLocation(value)

const url = "https://countriesnow.space/api/v0.1/countries/population/cities"
console.log(url)
axios.get(url)
.then(res=>setListOfCities(res.data.data))
if(location.length <=3){
    setMatchingCitiesArray([])
}

}

useEffect(()=>{
const arrayOfMatchingCities = []


listOfCities.map(city=>{
    if(location.length >=3 && arrayOfMatchingCities.length <=4){
    const cityName = city.city.toString()
cityName.toLowerCase().startsWith(location.toLowerCase())? arrayOfMatchingCities.push(city): ""
   
    }
})
setMatchingCitiesArray(arrayOfMatchingCities)


}, [location])




const handleClose = () =>{ 
    if(location === ""){
         router.push("/")
    }else{ 
        setLocation("")
    }
}



const AutoCompleteList = matchingCitiesArray.map(match=>{
    return <AutoCompleteItem 
    city={match} 
    key={match.city}
    submitAutoCompleteLocation={submitAutoCompleteLocation}
     setSelectedAutoCompleteLocation={setSelectedAutoCompleteLocation}/>
})


    return(
        <div className="add-location-form" >
            <form className="form" onSubmit={handleSubmit}>
                <button className="add-location-form-btn"  style={{borderRight:"0"}}><AiOutlinePlus /></button>
                <input type="text" name="location" placeholder="Enter the city or postcode" value={location} onChange={handleChange}/>
                <button className="add-location-form-btn" type="button" style={{borderLeft:"0"}} onClick={handleClose}><AiOutlineClose /></button>
            </form>
           {matchingCitiesArray[0]&& <ul className="auto-complete-list">
                {AutoCompleteList}
            </ul>
}
        </div>
    )
}

export default AddLocationForm