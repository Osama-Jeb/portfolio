import logo from "../assets/images/favicon-_1_.svg";

export default function Navbar() {

    return (
        <nav className=" p-4 fixed top-0 w-full">
            <div className="flex items-center justify-between gap-2 ">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="portfolio_logo"
                        className="w-12 aspect-square object-cover"
                    />
                    <p>Oussama Jebrane</p>
                </div>

                <div className="flex items-center gap-2">
                    <p>About</p>
                    <p>Skills</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>
            </div>
        </nav>
    )
}