function Navbar() {
    return (
        <>
            <nav id="navbar-top" className="navbar navbar-dark fixed-top px-3 retro-font">
                <a className="navbar-brand" href="#"></a>
                <ul className="nav ">
                    <li className="nav-item">
                        <a className="nav-link" href="#about-me">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;