import Title from "../components/Title"

export default function Projects() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center">
            <div className="w-full px-16">
                <Title title="Projects" />
                <div className="flex items-center justify-center flex-col gap-2s">
                    <p>project1</p>
                    <p>project2</p>
                    <p>project3</p>
                    <p>project4</p>
                    <p>project5</p>
                </div>
            </div>
        </section>
    )
}