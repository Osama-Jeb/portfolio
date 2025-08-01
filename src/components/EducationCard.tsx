import { TransText } from "./TransText";

export default function EducationCard({ education }: EducationCardProps) {
    
    return (
        <div className="bg-[#1F1F1F] rounded-xl p-6 hover:bg-[#2A2A2A] transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-alpha">
                    <TransText {...education.degree} />
                </h3>
                <span className="text-gray-400 font-medium">{education.year}</span>
            </div>
            <p className="text-xl text-gray-200 mb-2">{education.institution}</p>
            <p className="text-gray-300">
                <TransText {...education.description} />
            </p>
        </div>
    )
}