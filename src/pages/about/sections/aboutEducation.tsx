import Title from "../../../components/Title"

export default function AboutEducation() {
    const education = [
        {
            degree: "Bachelor's in Computer Science",
            institution: "University of Technology",
            year: "",
            description: "Specialized in web development and software engineering"
        },
        {
            degree: "Full Stack Web Development Certification",
            institution: "Tech Academy",
            year: "2023",
            description: "Intensive program covering modern web technologies"
        }
    ]

    return (
        <section className="px-16 py-20">
            <div className='w-full'>
                <Title title="Education & Certifications" />
                <div className="max-w-4xl mx-auto mt-12 space-y-8">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-[#1F1F1F] rounded-xl p-6 hover:bg-[#2A2A2A] transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-alpha">{edu.degree}</h3>
                                <span className="text-gray-400 font-medium">{edu.year}</span>
                            </div>
                            <p className="text-xl text-gray-200 mb-2">{edu.institution}</p>
                            <p className="text-gray-300">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}