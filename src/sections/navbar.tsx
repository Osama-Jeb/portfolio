import logo from "../assets/images/favicon-_1_.svg";

interface Theme {
    backgroundColor: string,
    color: string,
}
interface NavbarProps {
    theme: Theme,
    setTheme: (theme: Theme) => void,
}


export default function Navbar({ theme, setTheme }: NavbarProps) {

    const changeTheme = () => {
        setTheme({
            backgroundColor: theme.backgroundColor == "#050505" ? "" : "#050505",
            color: theme.color == "#F1F1F1" ? "" : "#F1F1F1"
        })
    }

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
                    <button
                    className="px-3 py-1 rounded bg-red-400"
                        onClick={changeTheme}
                    >
                        Change Theme
                    </button>
                </div>
            </div>
        </nav>
    )
}