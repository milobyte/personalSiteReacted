/**
 * This Component represents the overall dynamic container that displays information based on work, project, or additional experience.
 */

import WorkList from "./WorkList";
import workData from "../../data/workExperience";
import projectData from "../../data/projectExperience.js";
import workingOnData from "../../data/workingOnExperience";


function WorkContainer() {

    return (
        // Overall Experience Section
        <div className="experience min-vh-100" id="experience">
            {/* Container for follow up sections: Job, Personal, and Follow-up Experience */}
            <div className="container-fluid">
                <h1 className="text-center mx-3 text-decoration-underline">My Experience: </h1>
                    <WorkList type='work' data={workData}/>
            </div>
            <hr className="my-4 border-success border-3" />
            <div className="container-fluid">
                <h1 className="text-center mx-3 pt-3 text-decoration-underline">My Projects: </h1>
                    <WorkList type='project' data={projectData}/>
            </div>
            <hr className="my-4 border-success border-3" />
            <div className="container-fluid">
                <h1 className="text-center mx-3 pt-3 text-decoration-underline">What I'm Working On: </h1>
                    <WorkList type='prospect' data={workingOnData}/>
            </div>
            <hr className="my-4 border-success border-3" />
        </div>
    )
}

export default WorkContainer;