import js from "../assets/images/skills/javascript.svg";

export default function Hero() {

    const langs = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'php']

    const skills = ['ReactJS', 'React Native', 'Tailwind', 'Laravel', 'Firebase'];

    const traite = ['hardWorker', 'quickLearner', 'problemSolver'];

    const prm = ['hardWorker', 'quickLearner'];

    const me = {
        en: 'Me.js',
        fr: 'Moi.js',
    }

    return (
        <section className="flex items-center justify-center min-h-[80vh] bg-blue-500">
            <div className="flex items-center justify-around w-full bg-green-400">
                {/* Intro */}
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                {/* Coder */}
                <div className="text-start">
                    <div className="px-4 border-t-2 border-l border-r border-gray-600 bg-[#0d1117] text-white lg:px-8 py-5"
                        style={{ borderTopColor: "#FFA54F" }}>
                        <div className="flex space-x-2">
                            <img src={js} width={20} alt="javascript_logo" />
                            <p className="text-xl">
                                {me.en}
                            </p>
                        </div>
                    </div>

                    <div
                        className="overflow-hidden bg-[#0d1117] z-10 px-4 lg:px-8 py-4 lg:py-8 border-t-2 border-b border-l border-r border-gray-300"
                        style={{ borderTopColor: "#616161" }}
                    >
                        <code className="font-mono text-xs md:text-sm lg:text-base ">
                            <div className="blink">
                                <span className="mr-2 text-pink-500">const</span>
                                <span className="mr-2 text-white">coder</span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span></div><div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                <span className="text-gray-400">'</span>
                                <span className="text-amber-300">Oussama Jebrane</span>
                                <span className="text-gray-400">',</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">languages : </span>
                                <span className="text-gray-400">['</span>
                                {
                                    langs.map((lang, index) =>

                                        <span key={index}>
                                            <span className="text-amber-300">{lang}</span>

                                            {
                                                index != langs.length - 1 ?
                                                    <span className="text-gray-400">', '</span>
                                                    :
                                                    null
                                            }

                                        </span>


                                    )
                                }
                                <span className="text-gray-400">'],</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">skills : </span>
                                <span className="text-gray-400">['</span>
                                {
                                    skills.map((skill, index) =>

                                        <span key={index}>
                                            <span className="text-amber-300">{skill}</span>

                                            {
                                                index != skills.length - 1 ?
                                                    <span className="text-gray-400">', '</span>
                                                    :
                                                    null
                                            }
                                        </span>


                                    )
                                }
                                <span className="text-gray-400">'],</span>
                            </div>

                            {
                                traite.map((trait, index) =>
                                    <div key={index}>
                                        <span className="ml-4 lg:ml-8 mr-2 text-white">{trait} : </span>
                                        <span className="text-orange-400">true</span>
                                        <span className="text-gray-400">,</span>
                                    </div>

                                )
                            }

                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                                <span className="text-orange-400">function</span>
                                <span className="text-gray-400">() {'{'}</span>
                            </div>
                            <div>

                                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                                <span className="text-gray-400">(</span>
                            </div>
                            {
                                prm.map((element, index) =>

                                    <span key={index}>

                                        <div>
                                            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                            <span className="mr-2 text-white">{element}</span>
                                            <span className="text-amber-300">&amp;&amp;</span>
                                        </div>
                                    </span>
                                )
                            }

                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                <span className="mr-2 text-white">skills.length</span>
                                <span className="mr-2 text-amber-300">&gt;=</span>
                                <span className="text-orange-400">4</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">);</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 text-gray-400">{'}'};</span>
                            </div>
                            <div>
                                <span className="text-gray-400">{'}'};</span>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
        </section>
    )
}