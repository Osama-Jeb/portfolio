import Title from "../components/Title";

export default function Trusted() {
    return (
        <section>
            <div className="w-full px-16">
                <Title title="Trusted By" />
                
                <div className="flex items-center justify-center gap-4">
                    <p>sponsor1</p>
                    <p>sponsor2</p>
                    <p>sponsor3</p>
                </div>
            </div>
        </section>
    )
}