import profile from "../assets/images/profile.jpg";
import Title from "../components/Title";

export default function About() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center">
            <div className="w-full px-16">
                <Title title="About" />

                <div className="flex items-center justify-around gap-2">
                    <div>
                        <p>Web developer with year of hands-on experience, specializing in JavaScript and PHP.</p>
                        <p>I bring strong problem-solving skills, a collaborative approach, and an openness to opportunities where I can contribute and grow.</p>
                    </div>

                    <img src={profile}
                        className="w-40 object-cover rounded"
                        alt="oussama_jebrane_profile" />
                </div>
            </div>
        </section>
    )
}