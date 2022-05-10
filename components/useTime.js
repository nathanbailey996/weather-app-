function Time (dt, offset){
    const date = new Date(dt *1000)
    const hours = date.getHours()+(offset-1)
    const formattedHours = hours<=0? hours+24: hours
    const AmORPm = formattedHours >=12? "pm": "am"
    let twelveHours = formattedHours%12  ||12
    const minutes = date.getMinutes()
    const formattedMinutes = minutes>=0 && minutes<=9? `0${minutes}`: minutes
     const fullTime = `${twelveHours}.${formattedMinutes}${AmORPm}`
    return fullTime

}

export default Time