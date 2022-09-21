import React from "react";
import "./skills.css";
import { Link } from "react-router-dom";

// import { FaCss3Alt, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiMongodb } from "react-icons/si";

const Skills = () => {
    return (
        <>  <div className="h1">
            <h1 className="skillh1">Skills & Experience.</h1>
        </div>

            <div className='skillbox'>

                <div className='skills'>
                    <ul className="ul-list">
                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468176/languages/html-5_aed99c.png"
                                    alt=""
                                />
                            </Link>
                        </li>

                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <FaHtml5 /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468175/languages/css_z5upro.png"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <IoLogoJavascript /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468178/languages/js_ejooe1.png"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <FaReact /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468182/languages/structure_bvdkl2.png"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <FaHtml5 /> */}
                                <img
                                    src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <FaHtml5 /> */}
                                <img
                                    src="https://iconape.com/wp-content/png_logo_vector/bootstrap-3.png"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <SiMongodb /> */}
                                <img
                                    src="data:image/png;base64,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"
                                    alt=""
                                />
                            </Link>
                        </li>


                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <SiMongodb /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468851/languages/redux-seeklogo.com_sjpa6n.svg"
                                    alt=""
                                />
                            </Link>
                        </li>


                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <SiMongodb /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660469251/languages/git_da6bou.png"
                                    alt=""
                                />
                            </Link>
                        </li>


                    </ul>

                </div>
                <div className="Exp">

                    <p className="skills-p">I bring together form and function to create something that looks good and performs brilliantly.
                    </p>
                    <p className="skills-p">The main area of my expertise are front-end tools like like   <span>HTML, CSS, JavaScript, Tailwind CSS, React.js</span> . Next up I want to deep dive into  TypeScript, Next.js, Three.js & Backend development.</p>

                </div>
            </div>
        </>

    );
};

export default Skills;
