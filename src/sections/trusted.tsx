import Title from "../components/Title";
import { trusted } from "../constants/trusted";

export default function Trusted() {

    return (
        <section>
            <div className="w-full px-16">
                <Title title="Trusted By" />

                <div className="flex items-center justify-center gap-4 mt-12">
                    {
                        trusted.map((tru, ind) => (
                            <a key={ind} href={tru.website} target="_blank"
                                className="flex flex-col gap-2 items-center bg-[#1F1F1F] rounded p-4 cursor-pointer"
                            >
                                <img src={tru.image}
                                    className="w-[150px] h-[140px] object-cover"
                                    alt="trusted_logo" />
                                <p>{tru.name}</p>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}