import linkedInImg from '../images/LI-Logo.png'; 
import gitHubImg from '../images/GitHub_Logo.png'; 

function Bottom() {
    return (
        <footer className="footer-section" id="footer-section">
            <div className="container-fluid">
                <div className="row text-center pt-3 d-flex justify-content-around">
                    <a className="col-md-6 p-3" href="https://www.linkedin.com/in/miles-stanley-406ab3191/">
                        <img className="img-fluid footer-img" src={linkedInImg} />
                    </a>
                    <a className="col-md-6 p-3" href="https://github.com/milobyte">
                        <img className= "img-fluid footer-img" src={gitHubImg} />
                    </a>
                    <p>©2025 MILES STANLEY</p>
                </div>
            </div>
        </footer>
    )
}

export default Bottom;