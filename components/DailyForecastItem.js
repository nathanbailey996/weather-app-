function DailyForecastItem (props){
    return(
        <div className="daily-forecast">
    <p className="day-name weather-details-name">{props.dayName}</p>

{ props.icon?   <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather icon" className="weather-icon"/>
: ""}  
  <p>{props.temp}</p>
</div>
    )
}

export default DailyForecastItem