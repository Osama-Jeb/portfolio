import { Link } from "react-router-dom"
import { useState } from "react"
import Logo from "../../../components/Logo"
import { useScroll, useMotionValueEvent } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion"
import { LinkedInIcon, GitHubIcon, SunIcon, MoonIcon, HamburgerIcon, EnglishFlagIcon, FrenchFlagIcon } from "../../../components/icons"
import { useLanguage } from "../../../contexts/LanguageContext"
import { TransText } from "../../../components/TransText"

export default function Navbar({ changeTheme }: NavbarProps) {
    const { scrollY, scrollYProgress } = useScroll();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { selectedLanguage, toggleLanguage } = useLanguage();

    // Handle navbar visibility based on scroll direction
    useMotionValueEvent(scrollY, "change", (latest) => {
        const direction = latest > lastScrollY ? "down" : "up";
        const isAtTop = latest < 10;

        if (isAtTop) {
            setIsVisible(true);
        } else if (direction === "down" && latest > 100) {
            setIsVisible(false);
            setIsMenuOpen(false); // Close mobile menu when hiding navbar
        } else if (direction === "up") {
            setIsVisible(true);
        }

        setLastScrollY(latest);
    });


    const handleThemeChange = () => {
        changeTheme();
        setIsDarkTheme(!isDarkTheme);
    };

    const navLinks = [
        {
            to: "/",
            label: <TransText en="Home" fr="Accueil" />
        },
        {
            to: "/about",
            label: <TransText en="About Me" fr="À Propos" />
        },
        {
            to: "/projects",
            label: <TransText en="Projects" fr="Projets" />
        },
    ];

    const socialLinks = [
        {
            href: "https://linkedin.com/in/oussama-jebrane",
            icon: LinkedInIcon,
            label: "LinkedIn"
        },
        {
            href: "https://github.com/Osama-Jeb",
            icon: GitHubIcon,
            label: "GitHub"
        }
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-gray-800"
            initial={{ y: 0 }}
            animate={{
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
        >
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Logo />
                        <p className="hidden sm:block">Oussama Jebrane</p>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Navigation Links */}
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.to}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            <Link
                                to={link.to}
                                className="hover:text-alpha transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-alpha group-hover:w-full transition-all duration-300"
                                />
                            </Link>
                        </motion.div>
                    ))}

                    {/* Social Links */}
                    {socialLinks.map((social) => (
                        <motion.div
                            key={social.href}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-alpha transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        </motion.div>
                    ))}

                    {/* Language Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-full bg-alpha/10 hover:bg-alpha/20 transition-colors duration-300"
                        onClick={toggleLanguage}
                        aria-label="Toggle language"
                    >
                        <AnimatePresence mode="wait">
                            {selectedLanguage !== 'en' ? (
                                <motion.div
                                    key="french"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FrenchFlagIcon className="text-alpha" size={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="english"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <EnglishFlagIcon className="text-alpha" size={20} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* Theme Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-full bg-alpha/10 hover:bg-alpha/20 transition-colors duration-300"
                        onClick={handleThemeChange}
                        aria-label="Toggle theme"
                    >
                        <AnimatePresence mode="wait">
                            {!isDarkTheme ? (
                                <motion.div
                                    key="sun"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <SunIcon className="text-alpha" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="moon"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <MoonIcon className="text-alpha" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden p-2 hover:text-alpha transition-colors duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <HamburgerIcon isOpen={isMenuOpen} />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-black/30 backdrop-blur-md border-t border-gray-700"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {/* Mobile Navigation Links */}
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="block py-2 text-lg hover:text-alpha transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className="flex items-center gap-6 pt-4 border-t border-gray-700"
                            >
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.href}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-alpha transition-colors duration-300"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <social.icon size={24} />
                                    </motion.a>
                                ))}

                                {/* Mobile Language Toggle */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-full bg-alpha/10 hover:bg-alpha/20 transition-colors duration-300"
                                    onClick={toggleLanguage}
                                    aria-label="Toggle language"
                                >
                                    <AnimatePresence mode="wait">
                                        {selectedLanguage === 'en' ? (
                                            <motion.div
                                                key="french-mobile"
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.8, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <FrenchFlagIcon className="text-alpha" size={24} />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="english-mobile"
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.8, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <EnglishFlagIcon className="text-alpha" size={24} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>

                                {/* Mobile Theme Toggle */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-full bg-alpha/10 hover:bg-alpha/20 transition-colors duration-300"
                                    onClick={handleThemeChange}
                                    aria-label="Toggle theme"
                                >
                                    <AnimatePresence mode="wait">
                                        {isDarkTheme ? (
                                            <motion.div
                                                key="sun-mobile"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <SunIcon className="text-alpha" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="moon-mobile"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <MoonIcon className="text-alpha" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="bg-alpha z-50 fixed bottom-0 left-0 h-[0.5vh] w-full">
            </motion.div>
        </motion.nav>
    )
}
