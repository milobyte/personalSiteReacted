/*
Look into aria-controls
*/
function WorkListItem(id, title, org, date){
    const idValue = "prj" + id;
    const hrefValue = "#prj-info" + id;
    return(
        <>
            <a className="list-group-item list-group-item-action" id={idValue} data-bs-toggle="list" href={hrefValue} role="tab" aria-controls={hrefValue}>{title}</a>
            <p>{org}</p>
            <p>{date}</p>            
        </>
    )
} 

export default WorkListItem;