import Settings from "../components/Settings"

function settings (props){
    return(
        <div className="max-width-container">
<Settings state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default settings