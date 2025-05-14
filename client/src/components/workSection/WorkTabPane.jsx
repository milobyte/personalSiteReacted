/*
Look into aria-controls
*/
function WorkTabPane(props) {
    return (
        <>
            <div className="tab-pane fade show flex-column flex-grow-1" id={"prj-info" + props.id} role="tabpanel" aria-labelledby={"prj" + props.id}>
                <p>{props.description}</p>
            </div>
        </>
    )
}

export default WorkTabPane;