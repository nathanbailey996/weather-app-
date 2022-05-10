const reducer = (state, action)=>{
  if(action.type === "setCurrentLocationData"){
    return{...state, currentLocationData: action.data}
    }else if(action.type === "AddLocation"){ 
     const newArray = []
state.allLocationData.map(location=>{
    location.name === action.data.name?   newArray.push("true"): ""
})
return newArray[0]? state:  {...state, allLocationData:[...state.allLocationData, action.data], currentLocation:action.data}

    }else if(action.type === "RemoveLocation"){
        if(state.allLocationData.length>1){
    const newAllLocationsArray = []
    state.allLocationData.map(location=>{
        location.name !== action.name? newAllLocationsArray.push(location): ""
    })
    const allLocationsLength = state.allLocationData.length-2
  const newCurrentLocation = state.currentLocation.name === action.name? state.allLocationData[allLocationsLength]: state.currentLocation
    return{...state, allLocationData:newAllLocationsArray, currentLocation:newCurrentLocation}
}
    }else if(action.type === "ChangeCurrentLocation"){ 
       const newArray = []
        state.allLocationData.map(location=>{
            location.name === action.name? newArray.push(location): ""
        })

        return{...state, currentLocation:newArray[0]}
    }else if(action.type === "LightMode"){
    return{...state, LightMode:true}
    }else if(action.type === "DarkMode"){
        return{...state, LightMode:false}
    }else if(action.type === "Degrees"){
        return{...state, degrees:true}
    }else if(action.type === "Farhenheit"){
        return {...state, degrees:false}
    }
    
        return state
    }

    export default reducer