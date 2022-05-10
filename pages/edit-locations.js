import AddLocationMenu from "../components/AddLocationMenu"

function EditLocation (props){
    return(
        <div className="max-width-container">
             <AddLocationMenu state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default EditLocation