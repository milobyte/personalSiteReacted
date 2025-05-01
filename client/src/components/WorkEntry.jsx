function WorkEntry() {
    return (
        <div class="experience" id="experience">
            <div class="container-fluid">
                <h1 class="text-center mx-3 my-3">The Log of Learning</h1>
                <div class="row text-center pt-5">
                    <div class="row p-3">
                        <h3 class="pb-2"><u>Projects I've Worked On:</u></h3>
                        <div class="col-4">
                            <div class="list-group" id="project-tab" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="prj1" data-bs-toggle="list" href="#prj-info1" role="tab" aria-controls="prj-info1">MiniGNC</a>
                                <a class="list-group-item list-group-item-action" id="prj2" data-bs-toggle="list" href="#prj-info2" role="tab" aria-controls="prj-info2">COVID-19 Cartogropher</a>
                                <a class="list-group-item list-group-item-action" id="prj3" data-bs-toggle="list" href="#prj-info3" role="tab" aria-controls="prj-info3">Java Battleship</a>
                                <a class="list-group-item list-group-item-action" id="prj4" data-bs-toggle="list" href="#prj-info4" role="tab" aria-controls="prj-info4">Java Chess</a>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="tab-content" id="project-tabContent">
                                <div class="tab-pane fade show active" id="prj-info1" role="tabpanel" aria-labelledby="prj1">
                                    <p>The CS program’s Capstone project that has been assigned to me and another student. It is an application meant to visualize and store data relating to networks built using MiniNet, a network simulator that can run on a single end-system.
                                        This program uses a mixture of frameworks including Plotly, which plots the different types of Networks nodes and edges, Django, which hosts the front-end GUI, and Neo4J, a graphing database used to store information about our
                                        networks. The project is open-source and currently <a href="https://github.com/milobyte/MiniGNC-2"><strong>ongoing.</strong></a></p>
                                </div>
                                <div class="tab-pane fade" id="prj-info2" role="tabpanel" aria-labelledby="prj2">
                                    <p>I worked with a team to create a web application used to visualize COVID-19 related statistics. This project involved communication with the Google Cloud Platform, specifically the BigQuery API and multiple resources used to
                                        ensure easy collaboration and data retrieval. Google data related to the pandemic from August of 2020 to late 2021 was queried using Google’s BigQuery and sent to our backend. This data, represented as a JSON object, was then
                                        converted into a bar graph using ChartJS and displayed to the user with the front end GUI. Kubernetes was used to host our project temporarily for presentation purposes. We passed with an A+.</p>
                                </div>
                                <div class="tab-pane fade" id="prj-info3" role="tabpanel" aria-labelledby="prj3">
                                    <p>I worked with a partner to create a server/client representation of Battleship using Java. This program is able to host a server that can be joined by multiple clients using TCP connections. This program only involved a
                                        command-line representation of the board and clients, but implemented the correct functionality of the game. Multithreading was used to allow simultaneous communication between clients and the server. We passed with an A+.</p>
                                </div>
                                <div class="tab-pane fade" id="prj-info4" role="tabpanel" aria-labelledby="prj4">
                                    <p>I worked with a team to create both a CLI and GUI implementation of the board game Chess using Java. This involved programming the logistics of the game regarding valid turns, pieces, and win scenarios. The project was run
                                        through 2-week sprints which included transitional meeting minutes and regular feedback with our professor who served as project manager. We were able to successfully finish our GUI implementation before the end of the semester.
                                        We passed with an A.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row text-center p-3">
                    <div class="row">
                        <h3 class="pb-2"><u>What I'm Learning Now:</u></h3>
                        <div class="col-4">
                            <div class="list-group" id="learning-tab" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="goal1" data-bs-toggle="list" href="#goal1-info" role="tab" aria-controls="goal1-info">Web Development</a>
                                <a class="list-group-item list-group-item-action" id="goal2" data-bs-toggle="list" href="#goal2-info" role="tab" aria-controls="goal2-info">CompTIA Security+</a>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="goal1-info" role="tabpanel" aria-labelledby="goal1">
                                    <p>While I have experience in full-stack development, I am still learning how to integrate different types of APIs into various projects, how to use different front-end frameworks, and expanding my knowledge on back-end development.
                                        Furthermore, I am interested in learning React.js as I only have experience in NodeJS/Express.</p>
                                </div>
                                <div class="tab-pane fade" id="goal2-info" role="tabpanel" aria-labelledby="goal2">
                                    <p>I am working towards obtaining the Security+ certification. My background in IT has helped me learn many aspects of hardware, software, and network troubleshooting, but I am interested to learn more about Information Security.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkEntry;