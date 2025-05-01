function Navbar() {
    return (
        <>
            <img class="monkey-img" src="images/monkey.png" alt="Missing Monkey" />
            <nav id="navbar-top" class="navbar navbar-dark fixed-top px-3 retro-font">
                <a class="navbar-brand" href="#"></a>
                <ul class="nav ">
                    <li class="nav-item">
                        <a class="nav-link" href="#about-me">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#experience">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;