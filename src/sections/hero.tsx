export default function Hero() {


    return (
        <section className="min-h-[90vh]" id="hero">
            <div className="flex items-center justify-around w-full">
                {/* Intro */}
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Hi 👋, I'm Oussama Jebrane</h1>
                    <br />
                    <div className="flex gap-1">
                        <h1 className="text-7xl font-bold text-alpha">FULLSTACK WEB DEVELOPER
                        </h1>
                        <div className="w-[4px] h-[50px] bg-alpha animate-bounce"></div>
                    </div>
                    <br />
                    <h3 className="text-2xl font-bold">I conceive and build intuitive websites and mobile applications.</h3>
                </div>


            </div>
        </section>
    )
}