/*
Look into aria-controls
*/
function WorkTabPane(props) {
    return (
        <>
            <div className="tab-pane fade show" id={"prj-info" + props.id} role="tabpanel" aria-labelledby={"prj" + props.id}>
                <p>{props.description}</p>
            </div>
        </>
    )
}

export default WorkTabPane;