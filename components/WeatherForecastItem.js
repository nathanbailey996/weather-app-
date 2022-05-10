function WeatherForecastItem (props){
    
    return(
        <div className="hourly-forecast-item">
        <p className="time">{props.topItem}</p>
        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} className="weather-icon" alt="weather icon"/>
        <p>{props.description}</p>
        <p>{props.temp}</p>
    </div>
    )
}

export default WeatherForecastItem