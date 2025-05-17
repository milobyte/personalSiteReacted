/*
Look into aria-controls
*/
function WorkTabPane(props) {
    // console.log(props.logo);
    return (
        <>
            <div className="tab-pane fade show flex-column flex-grow-1" id={"prj-info" + props.type + props.id} role="tabpanel" aria-labelledby={"prj" + props.type + props.id}>
                <img src={props.logo} alt={props.org} className="img-fluid pb-5" />
                {props.description}
            </div>
        </>
    )
}

export default WorkTabPane;