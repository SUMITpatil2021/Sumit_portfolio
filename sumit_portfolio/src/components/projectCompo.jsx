import React from "react"
const projects = [
    {
        image:'sahyadri.jpeg',
        Title: "Sahyadri_Navigator (trek Management System)",
        TechStack : `Java, .NET MVC, Spring Boot REST API,React JS, MySQL, Microservice Architecture, GitHub`,
        duration: "feb 2024 - Feb 2024",
        description:   ` Sahyadri_Navigator is a trekk management web application that enhance the management of trekking activities.The
system aims to provide Trekking Club to post their trekks and trekkers to book the upcoming trekks of their dream
life. We also provide the facility of User-Friendly UI to the users for a much more hassle-freeexperience by using a
microservices architecture and we are following the Agile methodology while developing this web application. `
    },
    {
        image:'sahyadri.jpeg',
        Title: "Learning Management System (LMS)",
        TechStack : `Node JS,React JS, MySQL,  GitHub`,
        duration: "feb 2024 - Feb 2024",
        description:   ` Sahyadri_Navigator is a trekk management web application that enhance the management of trekking activities.The
system aims to provide Trekking Club to post their trekks and trekkers to book the upcoming trekks of their dream
life. We also provide the facility of User-Friendly UI to the users for a much more hassle-freeexperience by using a
microservices architecture and we are following the Agile methodology while developing this web application. `
    }
    // {
    //     image:'kit.png',
    //     degree: "B.Tech [Electronics and telecommunication engineering ]",
    //     institution: "KIT's College of Engineering Kolhapur ",
    //     year: "2020-2023",
    //     description: "Graduated with First Class   CGPI-7.87"
    // },
    // {
    //     image:'gpkp_logo.png',
    //     degree: "Diploma [Industrial Electronics engineering]",
    //     institution: "Government Polytechnic Kolhapur ",
    //     year: "2017-2020",
    //     description: "Graduated with First Class with distinction Percentage-91.81%"
    // },
    // {
    //     image:'ssc_logo.png',
    //     degree: "SSC",
    //     institution: "Maharashtra State Board  ",
    //     year: "2017",
    //     description: "Graduated with First Class with distinction  Percentage-87% "
    // }
    // Add more qualifications as needed
];

export default function ProjectCompo(){
    return(
        <>
    <div className="container my-5">
            <h2 className="text-center mb-4 decorative-title"> Projects </h2>
                <div className="row " >                   
                        {projects.map((project, index) => (                          
                        <div key={index}  className="d-flex align-items-center mb-4  card-qualification ">
                                
                            <div className="card-body col-md-4"> <img src={project.image} className="card-img-top" alt={`${project.institution} logo`} />
                            </div>
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