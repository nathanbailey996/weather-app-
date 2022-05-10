import DailyForecastItem from "./DailyForecastItem"

function WeatherDetails ({state}){
    return(
        <div className="week-forecast-container details-forecast-container">
            <p className="forecast-title">Details</p>
            <div className="weather-details-container"> 
            <img src={`https://openweathermap.org/img/wn/${state.currentLocation.current.weather[0].icon}@2x.png`} alt="weather icon"/>
            <div className="daily-forecast-container daily-details-items-container">
            <DailyForecastItem dayName="Feels like"  temp={Math.round(state.currentLocation.current.feels_like-273)} key={Math.random()}/>
            <DailyForecastItem dayName="Humidity"  temp={state.currentLocation.current.humidity} key={Math.random()}/>
            <DailyForecastItem dayName="Visibility"  temp={state.currentLocation.current.visibility/1000+ "km"} key={Math.random()}/>
            <DailyForecastItem dayName="Uv index"  temp={state.currentLocation.current.uvi} key={Math.random()}/>

            </div>
            </div>
        </div>
    )
}
export default WeatherDetails