import { TypeAnimation } from "react-type-animation";
import "./hero.scss";
import image from "../../../../assets/images/letter_O-removebg-preview.png"

export const Hero = () => {
    return (
        <>
            <div id="/" className="content">

                <div className="d-flex align-items-center">
                    <div>
                        <h4 className="robotoMono text-main">Hey There, I'm:</h4>
                        <h1 className="heroName"> Oussama Jebrane</h1>
                        <p className="w-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat vero esse, nisi eum tenetur sint aliquid nam cupiditate consectetur impedit minima corporis ducimus saepe similique! Incidunt eos atque provident a.</p>
                        <h2>
                            I'm a &nbsp;
                            <TypeAnimation
                                sequence={[
                                    "Web Developer",
                                    1000,
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
                        <a href="#projects">

                            <button className="btn btn-comp">Projects</button>
                        </a>
                    </div>
                    <div>
                        <img src={image} width={200} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}