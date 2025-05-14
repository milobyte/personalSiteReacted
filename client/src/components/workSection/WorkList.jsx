import data from "../../data/workExperience";

import WorkListItem from "./WorkListItem";
import WorkTabPane from "./WorkTabPane";

function WorkList(type) {
    const listElements = data.map(item => {
        return (<WorkListItem
            key={item.id}
            id={item.id}
            title={item.title}
            org={item.org}
            date={item.date}
        />
        )
    })
    const tabElements = data.map(item => {
        return (<WorkTabPane
            key={item.id}
            id={item.id}
            description={item.description}
        />
        )
    })
    console.log(listElements);
    return (
        <>
            {/* Wraps both List selection and contents of entry. */}
            <div className="row text-center pt-5 d-flex flex-column flex-grow-1 overflow-auto">
                <div className="row p-3 px-5">
                    {/* List Groups */}
                    <h3 className="pb-5"><u>My Professional Experience:</u></h3>
                    <div className="col-4">
                        <div className="list-group" id={type + "-tab"} role="tablist">
                            {listElements}
                        </div>
                    </div>
                    {/* List Selection */}
                    <div className="col-8 flex-grow-1 d-flex align-items-center justify-content-center">
                        <div className="tab-content" id={type + "-tabContent"}>
                            {tabElements}
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkList;