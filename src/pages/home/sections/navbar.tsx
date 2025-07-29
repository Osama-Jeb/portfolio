import { Link } from "react-router-dom"
import Logo from "../../../components/logo"

export default function Navbar({ changeTheme }: NavbarProps) {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-gray-800">
            <div className="flex items-center justify-between px-16 py-4">
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Logo />
                    <p>Oussama Jebrane</p>
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/" className="hover:text-alpha transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-alpha transition-colors">About Me</Link>
                    <a href="https://linkedin.com/in/oussama-jebrane" target="_blank" className="hover:text-alpha transition-colors">LinkedIn</a>
                    <a href="https://github.com/Osama-Jeb" target="_blank" className="hover:text-alpha transition-colors">GitHub</a>
                    <button
                        className="px-3 py-1 rounded bg-alpha hover:bg-alpha/80 transition-colors"
                        onClick={() => { changeTheme() }}
                    >
                        Theme
                    </button>
                </div>
            </div>
        </nav>
    )
}
