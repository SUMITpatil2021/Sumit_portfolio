import React from "react"
const projects = [
    {
  
        Title: "Sahyadri_Navigator (trek Management System)",
        TechStack : `Java, .NET MVC, Spring Boot REST API,React JS, MySQL, Microservice Architecture, GitHub`,
        duration: "feb 2024 - Feb 2024",
        description:   ` Sahyadri_Navigator is a trekk management web application that enhance the management of trekking activities.The
system aims to provide Trekking Club to post their trekks and trekkers to book the upcoming trekks of their dream
life. We also provide the facility of User-Friendly UI to the users for a much more hassle-freeexperience by using a
microservices architecture and we are following the Agile methodology while developing this web application. `
    },
    {
      
        Title: "Learning Management System (LMS)",
        TechStack : `MySQL, Express.js, React.js, Node.js ,GitHub`,
        duration: "feb 2024 - Feb 2024",
        description:   ` The Learning Management System (LMS) is a comprehensive web application developed using the MERN stack (MySQL, Express.js, React.js, Node.js). It provides a robust platform for managing online courses, student enrollments, instructor interactions, and course materials. Key features include user authentication, course creation and management, real-time notifications, progress tracking, and seamless integration with MySQL for efficient data storage and retrieval. Leveraging Node.js and Express.js for backend API development, React.js for dynamic frontend interfaces, and GitHub for version control, the LMS ensures a streamlined and interactive educational experience. `
    }
    
];

export default function ProjectCompo(){
    return(
        <>
    <div className="container my-5">
            <h2 className="text-center mb-4 decorative-title"> Projects </h2>
                <div className="row " >                   
                        {projects.map((project, index) => (                          
                        <div key={index}  className="d-flex align-items-center mb-4  card-qualification ">
                                
                           
                                    <div className="card-body col-md-8 ml-5 p-2">
                                        <h5 className="card-title">{project.Title}</h5> 
                                        <h6 className="card-subtitle mb-2 text-muted">{project.duration}</h6>
                                        <p className="card-text"><strong>Technology Used :  </strong> {project.TechStack}</p>
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                
                            </div>
                        ))}
                  
                </div>
            </div>
        </>
    )
}