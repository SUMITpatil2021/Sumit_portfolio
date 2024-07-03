import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
const Home = () => {
    return (
        <div className="about-us-container">
            <div className="row align-items-center">
                <div className="col-md-4 col-sm-6 col-xs-12 mb-3 mb-md-0">
                    <img
                        src="Sumit_ID_Photo.png"
                        alt="Sumit ID Photo"
                        className="id-photo img-fluid rounded-circle shadow border-2 border-primary"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">About Me</h2>
                        <p className="card-text">
                            Hello! I'm Sumit, an aspiring full-stack developer with a passion for creating dynamic and responsive web applications. I hold a CDAC certification, which has equipped me with a strong foundation in software development and the latest web technologies.
                        </p>
                        <p className="card-text">
                            I am proficient in frontend and backend technologies including HTML, CSS, JavaScript, React, Node.js, Java SpringBoot, and more. My goal is to continuously learn and improve my skills, and to contribute to innovative projects that make a difference.
                        </p>
                        <p className="card-text">
                            Welcome to my portfolio. Feel free to explore my projects and get in touch with me.
                        </p>
                        <button className="btn btn-primary">Get in Touch</button>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Home;

// CSS Styles

