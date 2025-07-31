import { TransText } from "../../../components/TransText";

export default function Hero() {
    return (
        <section className="min-h-[90vh] relative" id="hero">

            <div className="flex items-center justify-around w-full">


                <div className="text-center space-y-6 p-3">
                    {/* intro */}
                    <h1 className="text-2xl lg:text-5xl font-bold">
                        <TransText
                            en="Hi 👋, I'm Oussama Jebrane"
                            fr="Salut 👋, je suis Oussama Jebrane"
                        />
                    </h1>
                    <br />
                    <div>
                        <div className="flex gap-1">
                            <h1 className="text-4xl lg:text-7xl font-bold text-alpha">
                                <TransText
                                    en="FULLSTACK WEB DEVELOPER"
                                    fr="DÉVELOPPEUR WEB FULLSTACK"
                                />
                            </h1>
                            <div className="w-[4px] h-[50px] bg-alpha animate-bounce"></div>
                        </div>
                        <br />
                        <h3 className="text-xl lg:text-2xl font-bold">
                            <TransText
                                en="I conceive and build intuitive websites and mobile applications."
                                fr="Je conçois et développe des sites web et applications mobiles intuitifs."
                            />
                        </h3>
                    </div>

                    {/* cta buttons */}
                    <br />
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="bg-alpha text-white px-8 py-4 rounded-2xl font-semibold
                                border-2 border-alpha transition-all duration-300 hover:scale-105
                                inline-flex items-center gap-2 group"
                        >
                            <TransText
                                en="View My Work"
                                fr="Voir Mon Travail"
                            />
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <a
                            href="#contact"
                            className="bg-transparent text-alpha border-2 border-alpha
                                px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105
                                inline-flex items-center gap-2"
                        >
                            <TransText
                                en="Get In Touch"
                                fr="Contactez-Moi"
                            />
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>

                    {/* arrow button */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <svg className="w-6 h-6 text-alpha" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>


            </div>
        </section>
    )
}