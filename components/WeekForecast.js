import axios from "axios"
import HourForecastItem from "./HourForecastItem";
import DailyForecastItem from "./DailyForecastItem";

function WeekForecast ({state}){ 


const weatherSlider = state.currentLocation.hourly.map(hour=>{
    return <HourForecastItem hour={hour} key={Math.random()}/>
})

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const dailyForecast = state.currentLocation.daily.map(day=>{
    const date = new Date(day.dt *1000)
const dayName = days[date.getDay()]

    return <DailyForecastItem dayName={dayName} icon={day.weather[0].icon} temp={Math.round(day.temp.day -273)+ "°"} key={Math.random()}/>
    
}) 




 

    return(
        <div className="week-forecast-container">
         <p className="forecast-title">Forecast</p>
         <div className="forecast-weather-slider"> 
         {weatherSlider}
         </div>
         <div className="daily-forecast-container">
             {dailyForecast}
         </div>
         
          </div>
    )
}
export default WeekForecast