const projectExperience = [
    {
        id: 1,
        title: "MiniGNC",
        context: "Python, Neo4J, Plotly, Mininet",
        org: "WCU Capstone",
        description: (
            <p>
                The CS program’s Capstone project that has been assigned to me and another student. It is an application meant to visualize and store data relating to networks built using MiniNet, a network simulator that can run on a single end-system.
                This program uses a mixture of frameworks including Plotly, which plots the different types of Networks nodes and edges, Django, which hosts the front-end GUI, and Neo4J, a graphing database used to store information about our
                networks. The project is <a href="https://github.com/milobyte/MiniGNC-2"><strong>open-source.</strong></a>
            </p>
        ),
        logo: ""
    },
    {
        id: 2,
        title: "COVID-19 Cartographer",
        context: "Google Cloud Platform, NodeJS, Kubernetes, ChartJS",
        org: "Cloud Computing Project",
        description: (
            <p>
                I worked with a team to create a web application used to visualize COVID-19 related statistics. This project involved communication with the Google Cloud Platform, specifically the BigQuery API and multiple resources used to
                ensure easy collaboration and data retrieval. Google data related to the pandemic from August of 2020 to late 2021 was queried using Google’s BigQuery and sent to our backend. This data, represented as a JSON object, was then
                converted into a bar graph using ChartJS and displayed to the user with the front end GUI. Kubernetes was used to host our project temporarily for presentation purposes. The project is <a href="https://github.com/7wesley/CS493"><strong>open-source.</strong></a>
            </p>
        ),
        logo: ""
    },
    {
        id: 3,
        title: "Java TCP Battleship",
        context: "Java, Linux",
        org: "Java Battleship",
        description: (
            <p>
                I worked with a partner to create a server/client representation of Battleship using Java. This program is able to host a server that can be joined by multiple clients using TCP connections. This program only involved a
                command-line representation of the board and clients, but implemented the correct functionality of the game. Multithreading was used to allow simultaneous communication between clients and the server. Available by request.
            </p>
        ),
        logo: ""
    },
    {
        id: 4,
        title: "Java Chess",
        context: "Java, Linux",
        org: "Software Engineering Project",
        description: (
            <p>
                I worked with a team to create both a CLI and GUI implementation of the board game Chess using Java. This involved programming the logistics of the game regarding valid turns, pieces, and win scenarios. The project was run
                through 2-week sprints which included transitional meeting minutes and regular feedback with our professor who served as project manager. We were able to successfully finish our GUI implementation before the end of the semester. Available by request.
            </p>
        ),
        logo: ""
    }
];

export default projectExperience;