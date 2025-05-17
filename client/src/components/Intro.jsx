function Intro() {
    return (
        <>
            <div className="body-content" data-bs-spy="scroll" data-bs-target="#navbar-top" data-bs-offset="0" tabIndex="0">
                <div className="intro" id="intro">
                    <div className="container">
                        <h1>Hello! I'm Miles Stanley</h1>
                        <h3>IT @ NCCAT | Programmer | Pretty Cool Guy</h3>
                    </div>
                </div>
                <div className="about-me" id="about-me">
                    <section className="container-fluid">
                        <div className="row text-center pt-3">
                            <div className="col-md-6">
                                <img className="rounded-circle img-fluid px-5" src="images/basic.jpg" alt="Missing Miles" />
                            </div>
                            <div className="col-md-6 align-self-center">
                                <p className="px-4">It’s a pleasure to virtually greet you! I’m from Statesville, NC, and I graduated with a Bachelor’s degree in Computer Science in 2022. 
                                    Since then, I’ve been working in the tech industry for about three years. Ever since the boom of the internet in the late ’90s and into the 2000s, my life has revolved around the ever-evolving world of technology and the gadgets we all love. 
                                    I’m a quick learner—something many friends and colleagues can confidently attest to! In this field, you never quite know what’s around the corner, but I’ve always enjoyed diving into new technologies and rising to new challenges. 
                                    I value strong collaboration and believe that great teamwork truly makes the dream work. I’ve always strived to help bring both my own goals and those of my peers to life. Please feel free to connect—I’d love to chat!</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Intro;