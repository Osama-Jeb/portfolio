import { NavLink } from "react-router-dom"
import { BiLogoFacebookCircle, BiLogoLinkedin, BiLogoGithub, BiLogoWhatsapp, BiLogoTwitter } from "react-icons/bi"

export const Navigation = () => {
    return (
        <>
            <div className=" d-flex align-items-center justify-content-around p-3">
                <div className="d-flex gap-1">
                    <p>img</p>
                    <p>Name</p>
                </div>
                <div className="d-flex gap-2">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/"}>About</NavLink>
                    <NavLink to={"/"}>Portfolio</NavLink>
                    <NavLink to={"/"}>Contact</NavLink>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <a href="">
                        <BiLogoFacebookCircle />
                    </a>
                    <a href="">
                        <BiLogoLinkedin />
                    </a>
                    <a href="">
                        <BiLogoGithub />
                    </a>
                    <a href="">
                        <BiLogoWhatsapp />
                    </a>
                    <a href="">
                        <BiLogoTwitter />
                    </a>
                    <button className="btn btn-success p-1 rounded-pill">Contact Me</button>
                </div>
            </div>
        </>
    )
}
