import ChangeUnitSetting from "../components/ChangeUnitSetting"

function ChangeUnit(props){
    return(
<div className="max-width-container">

<ChangeUnitSetting state={props.state} dispatch={props.dispatch} />
</div>
    )
}

export default ChangeUnit