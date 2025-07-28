import profile from "../../../assets/images/profile.jpg"

export default function AboutHero() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-16 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold">About Me</h1>
                    <h2 className="text-3xl text-alpha font-semibold">Passionate Full Stack Developer</h2>
                    <p className="text-xl leading-relaxed">
                        I'm a dedicated web developer with a passion for creating innovative solutions
                        that make a difference. With expertise in modern web technologies and a collaborative
                        approach, I bring ideas to life through clean, efficient code.
                    </p>
                    <p className="text-lg text-gray-300">
                        When I'm not coding, you'll find me exploring new technologies, contributing to
                        open source projects, or capturing the world through my camera lens.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src={profile}
                        alt="Oussama Jebrane"
                        className="w-80 rounded-2xl hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    )
}