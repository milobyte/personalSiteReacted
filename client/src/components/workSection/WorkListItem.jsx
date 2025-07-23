/**
 * This Component represents a dynamic Bootstrap List Group Item div that should be conditionally rendered and displayed alongside it's respective WorkTabPane item
 * and contained within a proper WorkList. 
 * @typedef {Object} props - React parameters passed in for conditional data setting within the list group item component. This includes the following information:
 * @property {string} id - The numbered ID associated to both this individual list group item and the respective list group item that selects it.
 * @property {string} type - Specifies which section of the work section this list group item applies to.
 * @property {string} org - The organization associated to this specific list group item entry. Currently used as text for the list item button
 * @property {string} context - Additional information to display below the current list group item
 * @property {string} description - The text description that describes this list group item entry.
 */
function WorkListItem(props){
    const idValue = "prj" + props.type + props.id;
    const hrefValue = "#prj-info" + props.type + props.id;
    const ACTIVEDEFAULT = 1; //Specifies that this is the item number to open by default/page load

    return(
        <>
            <a className={`list-group-item list-group-item-success list-group-item-action ${props.id === ACTIVEDEFAULT ? 'active' : ''}`} id={idValue} data-bs-toggle="list" href={hrefValue} role="tab" aria-controls={hrefValue}>{props.title}</a>
            <p className= "pt-2">{props.org}</p>
            <p>{props.context}</p>            
        </>
    )
} 

export default WorkListItem;