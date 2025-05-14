import WorkList from "./WorkList";

function WorkContainer() {

    return (
        // Overall Experience Section
        <div className="experience min-vh-100" id="experience">
            {/* Container for follow up sections: Job, Personal, and Follow-up Experience */}
            <div className="container-fluid">
                <h1 className="text-center mx-3 my-3">My Experience: </h1>
                    <WorkList 
                        type='work'
                    />
                {/* Wraps both List selection and contents of entry. */}
            </div>
        </div>
    )
}

export default WorkContainer;