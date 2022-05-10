import { GiSunset, GiSunrise } from "react-icons/gi"
import useTime from "./useTime"

function SunriseWeatherInfo ({state}){

    const homeStyles = {
        backgroundColor:state.LightMode? "#78b1f9": "#252422"
      }

const offset = state.currentLocation.timezone_offset/3600
const sunriseTime = useTime(state.currentLocation.current.sunrise, offset)
const sunsetTime = useTime(state.currentLocation.current.sunset, offset)


    return(
        <div className="weather-info-container" style={homeStyles}>
 <div className="weather-info-item">
     <p><GiSunset className="weather-info-icon"/> Sunrise</p>
     <p>{sunriseTime}</p>
 </div>
 <div className="weather-info-item">
     <p><GiSunrise className="weather-info-icon"/>Sunset</p>
     <p>{sunsetTime}</p>
 </div>
    </div>
    )
}

export default SunriseWeatherInfo