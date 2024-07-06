import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faJava,  faNode, faGitAlt, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';
import { SiSpringboot,SiBootstrap,SiMysql,SiMongodb ,SiPostman ,SiSwagger  } from "react-icons/si";
import { DiDotnet } from "react-icons/di";

import './skills.css'; // Import your custom CSS for additional styling
import 'bootstrap-icons/font/bootstrap-icons.css';


const Skills = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Technology Stack</h2>

            {/* Frontend Cards */}
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h4 className="card-title">Frontend</h4>
                            <div className="tech-stack-icons">
                                <div className="icon icon-html">
                                    <FontAwesomeIcon icon={faHtml5} />
                                    <span>HTML</span>
                                </div>
                                <div className="icon icon-css">
                                    <FontAwesomeIcon icon={faCss3Alt} />
                                    <span>CSS</span>
                                </div>

                                <div className="icon icon-bootstrap">
                                    
                                    <span> <SiBootstrap />BOOTSTRAP</span>
                                </div>


                                <div className="icon icon-react">
                                    <FontAwesomeIcon icon={faReact} />
                                    <span>ReactJS</span>
                                </div>
                                {/* Add more frontend icons */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backend Cards */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h4 className="card-title">Backend</h4>
                            <div className="tech-stack-icons">
                                <div className="icon icon-java">
                                    <FontAwesomeIcon icon={faJava} />
                                    <span>Java</span>
                                </div>

                                <div className="icon icon-springboot">

                                    <span> <SiSpringboot /> SpringBoot</span>
                                </div>

                                <div className="icon icon-dotnet">

                                    <span> <DiDotnet /> DOTNET Framework</span>
                                </div>


                                <div className="icon icon-nodejs">
                                    <FontAwesomeIcon icon={faNode} />
                                    <span>Node.js</span>
                                </div>
                                {/* Add more backend icons */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Database and Tools Cards */}
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-6">
                        <div className="card-body">
                            <h4 className="card-title">Database</h4>
                            <div className="tech-stack-icons">
                                <div className="icon icon-mysql">   
                                    <span> <SiMysql /> </span>
                                </div>
                                <div className="icon icon-mongodb">   
                                    <span> <SiMongodb  /> MongoDB</span>
                                </div>
                                {/* Add more database icons */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card mb-6">
                        <div className="card-body">
                            <h4 className="card-title">Tools</h4>
                            <div className="tech-stack-icons">
                                <div className="icon icon-git">
                                    <FontAwesomeIcon icon={faGitAlt} />
                                    <span>Git</span>
                                </div>
                                <div className="icon icon-github">
                                    <FontAwesomeIcon icon={faGithub} />
                                    <span>GitHub</span>
                                </div>
                                <div className="icon icon-postman">
                                    
                                    <span><SiPostman /> POSTMAN</span>
                                </div>
                                <div className="icon icon-swagger">
                                    
                                    <span><SiSwagger  /> SWAGGER</span>
                                </div>
                                <div className="icon icon-docker">
                                    <FontAwesomeIcon icon={faDocker} />
                                    <span>Docker</span>
                                </div>
                                {/* Add more tools icons */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
