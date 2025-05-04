function Intro() {
    return (
        <>
            <div className="body-content" data-bs-spy="scroll" data-bs-target="#navbar-top" data-bs-offset="0" tabIndex="0">
                <div className="intro" id="intro">
                    <div className="container">
                        <h1>Hello, I'm Miles Stanley</h1>
                        <h3>IT @ NCCAT | Programmer | Pretty Cool Guy</h3>
                    </div>
                </div>
                <div className="about-me" id="about-me">
                    <section className="container-fluid">
                        <div className="row text-center pt-3">
                            <div className="col-md-6">
                                <img className="rounded-circle img-fluid px-5" src="images/me.jpg" alt="Missing Miles" />
                                <h2 className="text-center px-2 py-5">Miles Stanley</h2>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <p className="px-4">I'm from Statesville, NC and currently pursuing a bachelors in
                                    Computer Science at Western Carolina University. I work part-time in the Technology Department for the North Carolina Center
                                    of the Advancement of Teaching. I have expierience in both hardware and software management, but I am always interested in learning new
                                    things, advancing my skills, and finding new passions.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Intro;