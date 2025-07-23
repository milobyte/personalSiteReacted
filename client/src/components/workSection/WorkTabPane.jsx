/**
 * This Component represents a dynamic Bootstrap Tab Pane div that should be conditionally rendered and displayed alongside it's respective WorkListItem. 
 * @typedef {Object} props - React parameters passed in for conditional data setting within the tab pane component. This includes the following information:
 * @property {string} id - The numbered ID associated to both this individual tab pane and the respective list group item that selects it.
 * @property {string} type - Specifies which section of the work section this tab pane applies to.
 * @property {string} logo - The image path to the tab pane content's associated logo/image
 * @property {string} org - The organization associated to this specific tab pane entry. Currently used as alt-text for the logo
 * @property {string} description - The text description that describes this tab pane entry.
 */
function WorkTabPane(props) {
        const ACTIVEDEFAULT = 1; //Specifies that this is the item number to open by default/page load
    return (
        <>
            <div className={`tab-pane fade show flex-column flex-grow-1 ${props.id === ACTIVEDEFAULT ? 'active' : ''}`} id={"prj-info" + props.type + props.id} role="tabpanel" aria-labelledby={"prj" + props.type + props.id}>
                <img src={props.logo} alt={props.org} className="img-fluid pb-5 logo-img" />
                {props.description}
            </div>
        </>
    )
}

export default WorkTabPane;