/**
 * This Component represents the dynamic creation of both List Group items and their respective Tab Pane entries by parsing through 
 * specific data entries that are passed in.
 * @typedef {Object} data - Organized infromation that's been passed in as a JS object. This data is used to create both List Group items and Tab Pane entries.
 * @param {string} type - Specifies which section of the work section this Work List item applies to.
 */

import WorkListItem from "./WorkListItem";
import WorkTabPane from "./WorkTabPane";

function WorkList({type , data}) {
    // console.log(data);

    const listElements = data.map(item => {
        return (<WorkListItem
            key={type + item.id}
            id={item.id}
            title={item.title}
            org={item.org}
            context={item.context}
            type={type}
        />
        )
    })
    const tabElements = data.map(item => {
        return (<WorkTabPane
            key={type + item.id}
            id={item.id}
            description={item.description}
            org={item.org}
            logo={item.logo}
            type={type}
        />
        )
    })
    //console.log(listElements);
    return (
        <>
            {/* Wraps both List selection and contents of entry. */}
            <div className="row text-center pt-5 d-flex flex-column flex-grow-1 overflow-auto">
                <div className="row p-3 px-5">
                    {/* List Groups */}
                    <div className="col-4 list-tint-green py-4 px-4 align-items-center">
                        <div className="list-group" id={type + "-tab"} role="tablist">
                            {listElements}
                        </div>
                    </div>
                    {/* List Selection */}
                    <div className="col-8 flex-grow-1 d-flex align-items-center justify-content-center">
                        <div className="tab-content p-4" id={type + "-tabContent"}>
                            {tabElements}
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkList;