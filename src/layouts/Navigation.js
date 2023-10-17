import { HashLink } from "react-router-hash-link"
import { BiLogoFacebookCircle, BiLogoLinkedin, BiLogoGithub, BiLogoWhatsapp, BiLogoTwitter } from "react-icons/bi"
import "./navigation.scss"
import logo from "../assets/images/letter_O-removebg-preview.png"

export const Navigation = () => {
    
    return (
        <>
            <nav className=" d-flex align-items-center justify-content-around pt-3">
                <div className="d-flex gap-1 align-items-center">
                    <img src={logo} alt="" width={150} />
                </div>
                <div className="d-flex gap-4 links">
                    <HashLink smooth to={"/#top"}>Home</HashLink>
                    <HashLink smooth to={"/#about"}>About</HashLink>
                    <HashLink smooth to={"/#portfolio"}>Projects</HashLink>
                    <HashLink smooth to={"/#contact"}>Contact</HashLink>
                </div>
                <div className="d-flex gap-4 align-items-center social">
                    <div className="d-flex align-items-center gap-2">
                        <a href="https://www.facebook.com/profile.php?id=61552603162399">
                            <BiLogoFacebookCircle />
                        </a>
                        <a href="https://www.linkedin.com/in/oussama-jebrane/">
                            <BiLogoLinkedin />
                        </a>
                        <a href="https://github.com/Osama-Jeb">
                            <BiLogoGithub />
                        </a>
                        <a href="https://wa.me/212696916944">
                            <BiLogoWhatsapp />
                        </a>
                        <a href="https://twitter.com/OJeb42">
                            <BiLogoTwitter />
                        </a>
                    </div>
                    <button className="btn btn-comp p-1 rounded-pill">Contact Me</button>
                </div>
            </nav>
        </>
    )
}
