/*
Look into aria-controls
*/
function WorkListItem(props){
    const idValue = "prj" + props.type + props.id;
    const hrefValue = "#prj-info" + props.type + props.id;
    // console.log("IDValue: " + idValue);
    // console.log("hrefValue: " + hrefValue);
    return(
        <>
            <a className="list-group-item list-group-item-success list-group-item-action" id={idValue} data-bs-toggle="list" href={hrefValue} role="tab" aria-controls={hrefValue}>{props.title}</a>
            <p className= "pt-2">{props.org}</p>
            <p>{props.date}</p>            
        </>
    )
} 

export default WorkListItem;