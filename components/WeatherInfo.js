import  { WiRaindrop }from "react-icons/wi"
import  { RiCompass2Fill, RiWindyFill }from "react-icons/ri"
import  { GiWindsock}from "react-icons/gi"
import  { BsEye, BsFillSunFill}from "react-icons/bs"
import { FaTemperatureLow } from "react-icons/fa"

function WeatherInfo ({state}){ 

    const directionArray = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]
const degrees = state.currentLocation.current.wind_deg
const direction = directionArray[Math.round(degrees/22.5)]

const temp = state.currentLocation.current.feels_like
const farhenheitTemp = Math.round((temp -273.15)*9/5 +32) +"F"

const homeStyles = {
        backgroundColor:state.LightMode? "#78b1f9": "#252422"
      }
    
return(
    <div className="weather-info-container" style={homeStyles}>
 <div className="weather-info-item">
     <p><WiRaindrop className="weather-info-icon"/> Humidity</p>
     <p>{state.currentLocation.current.humidity}%</p>
 </div>
 <div className="weather-info-item">
     <p><RiCompass2Fill className="weather-info-icon"/>Pressure</p>
     <p>{state.currentLocation.current.pressure}hPa</p>
 </div>
 <div className="weather-info-item">
     <p><RiWindyFill className="weather-info-icon"/> Wind Speed</p>
     <p>{Math.round(state.currentLocation.current.wind_speed*3.6)}km</p>
 </div>
 <div className="weather-info-item">
     <p><GiWindsock className="weather-info-icon"/> Wind Direction</p>
     <p>{direction}</p>
 </div>
 <div className="weather-info-item">
     <p><BsEye className="weather-info-icon"/> Visibility</p>
     <p>{state.currentLocation.current.visibility/1000}km</p>
 </div>
 <div className="weather-info-item">
     <p><BsFillSunFill className="weather-info-icon"/> Uv Index</p>
     <p>{state.currentLocation.current.uvi}</p>
 </div>
 <div className="weather-info-item">
     <p><FaTemperatureLow className="weather-info-icon"/> Feels Like</p>
     <p>{state.degrees? Math.round(state.currentLocation.current.feels_like-273) +"°": farhenheitTemp}</p>
 </div>


    </div>
)
}

export default WeatherInfo