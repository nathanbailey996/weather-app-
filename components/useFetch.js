import axios from "axios"
import {useState, useEffect} from "react"

function useFetch(url){
const [weatherData, setWeatherData] = useState([])

useEffect(()=>{
axios.get(url)
.then(res=> setWeatherData(res.data))
 .catch(err=> alert(err.message))

}, [url])

return weatherData
} 

export default useFetch