function Intro() {
    return (
        <>
            <div class="body-content" data-bs-spy="scroll" data-bs-target="#navbar-top" data-bs-offset="0" tabindex="0">
                <div class="intro" id="intro">
                    <div class="container">
                        <h1>Hello, I'm Miles Stanley</h1>
                        <h3>IT @ NCCAT | Programmer | Pretty Cool Guy</h3>
                    </div>
                </div>
                <div class="about-me" id="about-me">
                    <section class="container-fluid">
                        <div class="row text-center pt-3">
                            <div class="col-md-6">
                                <img class="rounded-circle img-fluid px-5" src="images/me.jpg" alt="Missing Miles" />
                                <h2 class="text-center px-2 py-5">Miles Stanley</h2>
                            </div>
                            <div class="col-md-6 align-self-center">
                                <p class="px-4">I'm from Statesville, NC and currently pursuing a bachelors in
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