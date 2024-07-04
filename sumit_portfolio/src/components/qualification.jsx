import React from "react";
import './qualification.css'
const qualifications = [
    {
        image:'cdac_logo.png',
        degree: "Post-Graduate Diploma in Advance Computing [PG-DAC]",
        institution: "CDAC,Pune",
        year: "Sept 2023 - Feb 2024",
        description: "Graduated with First Class Honours, with a focus on software development and data structures."
    },
    {
        image:'kit.png',
        degree: "B.Tech [Electronics and telecommunication engineering ]",
        institution: "KIT's College of Engineering Kolhapur ",
        year: "2020-2023",
        description: "Graduated with First Class   CGPI-7.87"
    },
    {
        image:'gpkp_logo.png',
        degree: "Diploma [Industrial Electronics engineering]",
        institution: "Government Polytechnic Kolhapur ",
        year: "2017-2020",
        description: "Graduated with First Class with distinction Percentage-91.81%"
    },
    {
        image:'ssc_logo.png',
        degree: "SSC",
        institution: "Maharashtra State Board  ",
        year: "2017",
        description: "Graduated with First Class with distinction  Percentage-87% "
    }
    // Add more qualifications as needed
];
export default function Qualification() {

    return (
        <>
            <div className="container my-5">
            <h2 className="text-center mb-4 decorative-title"> Qualifications</h2>
                <div className="row " >                   
                        {qualifications.map((qual, index) => (                          
                        <div key={index}  className="d-flex align-items-center mb-4  card-qualification ">
                                
                            <div className="card-body col-md-3"> <img src={qual.image} className="card-img-top" alt={`${qual.institution} logo`} />
                            </div>
                                    <div className="card-body col-md-9">
                                        <h5 className="card-title">{qual.degree}</h5> 
                                        <h6 className="card-subtitle mb-2 text-muted">{qual.institution}</h6>
                                        <p className="card-text"><strong>Year:</strong> {qual.year}</p>
                                        <p className="card-text">{qual.description}</p>
                                    </div>
                                
                            </div>
                        ))}
                  
                </div>
            </div>
        </>
    )

}