import { TypeAnimation } from "react-type-animation";
import "./hero.scss";

export const Hero = () => {
    return (
        <>
            <div id="/" className="content">
                <div>
                    <h4 className="robotoMono text-main">Hey There, I'm:</h4>
                    <h1 className="heroName"> Oussama Jebrane</h1>
                    <p className="w-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat vero esse, nisi eum tenetur sint aliquid nam cupiditate consectetur impedit minima corporis ducimus saepe similique! Incidunt eos atque provident a.</p>
                    <h2>
                        I'm a &nbsp;
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Web Developer",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Problem Solver",
                                1000,
                                "Team Player",
                                1000,
                            ]}
                            wrapper="span"
                            speed={25}
                            className="typeAni"
                            style={{ fontSize: '3vw', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <br />
                    <button className="btn btn-light">Go To Projects</button>
                </div>
            </div>
        </>
    )
}