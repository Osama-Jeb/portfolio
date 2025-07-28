import Title from "../../../components/Title";
import { experience } from "../../../constants/aboutInfo";

export default function AboutExperience() {

    return (
        <section className="px-16 py-20">
            <div className="w-full">
                <Title title="Professional Experience" />
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-alpha"></div>
                        <div className="space-y-12">
                            {experience.map((exp, index) => (
                                <div key={index} className="relative pl-12">
                                    <div className="absolute left-0 w-8 h-8 bg-alpha rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                    <div className="bg-[#1F1F1F] rounded-xl p-6 hover:bg-[#2A2A2A] transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-alpha">{exp.role}</h3>
                                            <span className="text-gray-400 font-medium">{exp.period}</span>
                                        </div>
                                        <p className="text-xl text-gray-200 mb-4">{exp.company}</p>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="text-gray-300 flex items-start">
                                                    <span className="text-alpha mr-2">•</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div></div>
        </section>
    )
}