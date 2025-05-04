/*
Look into aria-controls
*/
function WorkTabPane(id, description) {
    return (
        <>
            <div className="tab-pane fade show" id={"prj-info" + id} role="tabpanel" aria-labelledby={"prj" + id}>
                <p>{description}</p>
            </div>
        </>
    )
}

export default WorkTabPane;