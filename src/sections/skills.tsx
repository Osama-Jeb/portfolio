import Title from "../components/Title"

export default function Skills() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center">
            <div className="w-full px-16">
                <Title title="Skills" />
                <div className="flex items-center justify-center flex-col">
                    <p>skills 1</p>
                    <p>skills 2</p>
                    <p>skills 3</p>
                </div>
            </div>
        </section>
    )
}