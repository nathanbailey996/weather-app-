import AddLocationForm from "../components/AddLocationForm"

function AddLocation (props){
    return (
        <div className="max-width-container">
                <AddLocationForm  dispatch={props.dispatch} />

        </div>
    )
    
}

export default AddLocation