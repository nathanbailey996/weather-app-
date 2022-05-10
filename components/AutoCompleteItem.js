function AutoCompleteItem ({city, submitAutoCompleteLocation, setSelectedAutoCompleteLocation}){
    return(
        <li onClick={()=>{
            setSelectedAutoCompleteLocation(city.city)
            submitAutoCompleteLocation(city.city)
        }}>
        {`${city.city}, ${city.country}`}
        </li>
    )
}
export default AutoCompleteItem