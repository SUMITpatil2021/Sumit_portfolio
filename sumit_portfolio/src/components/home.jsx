import React from "react";
import { Link } from "react-scroll";

import "./Home.css"; // Import a custom CSS file for any additional styling

export default function Home() {
    return (
        <div className="container text-center my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <img 
                            src="sumit_ID_Photo.png" 
                            alt="IDphoto" 
                            className="card-img-top img-fluid rounded-circle mx-auto d-block mt-4" 
                            style={{ width: '150px', height: '150px' }} // Fixed size for the image
                        />
                        <div className="card-body">
                            <h5 className="card-title">Sumit</h5>
                            <p className="card-text">
                                Hello! I'm Sumit, an aspiring full-stack developer with a passion for creating dynamic and responsive web applications. I hold a CDAC certification, which has equipped me with a strong foundation in software development and the latest web technologies.
                            </p>
                            <p className="card-text">
                                I am proficient in frontend and backend technologies including HTML, CSS, JavaScript, React, Node.js,Java SpringBoot,DOTNET Framework  and more. My goal is to continuously learn and improve my skills, and to contribute to innovative projects that make a difference.
                            </p>
                            <p className="card-text">
                                Welcome to my portfolio. Feel free to explore my projects and get in touch with me.
                            </p>
                            <Link to="contact" spy={true} smooth={true}>
                                <button className="btn btn-primary mt-3">Contact Me</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
