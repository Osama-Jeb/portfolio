import Title from "../../../components/Title"
import { interests } from "../../../constants/aboutInfo"

export default function AboutInterests() {

    return (
        <section className="px-16 py-20">
            <div className="w-full">
                <Title title="Personal Interests" />
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {interests.map((interest, index) => (
                            <div key={index} className="bg-[#1F1F1F] rounded-xl p-6 hover:bg-[#2A2A2A] transition-colors">
                                <div className="flex items-center mb-4">
                                    <span className="text-4xl mr-4">{interest.icon}</span>
                                    <h3 className="text-2xl font-bold text-alpha">{interest.name}</h3>
                                </div>
                                <p className="text-gray-300">{interest.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}