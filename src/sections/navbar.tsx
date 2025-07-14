import logo from "../assets/images/favicon-_1_.svg";

export default function Navbar() {

    return (
        <nav className="flex items-center justify-between p-4">
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
        </nav>
    )
}