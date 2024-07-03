import React, { useEffect,useRef,useState } from "react";
import { Link } from "react-scroll";
import { useNavigate, Routes} from "react-router-dom";
import { Nav,Navbar,Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faEnvelope, faBriefcase,faProjectDiagram ,faDownload } from '@fortawesome/free-solid-svg-icons';
import Home from "./home";

export default  function LandingPage(){



const Navigate = useNavigate();
const[selectedLink, setSelectedLink] = useState("home");

const handleDownload = () => {
  // Replace with your resume file URL or path
  const resumeUrl = 'https://drive.google.com/file/d/1rBBANeaMXBHEAPCirV2S63T0Hogg67iK/view?usp=drive_link'; 

  // Use JavaScript to create a link element
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.setAttribute('download', 'resume.pdf'); // Specify the file name here
  link.setAttribute('target', '_blank'); //open in new tab 

  // Append the link to the body
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Clean up: Remove the link from the body
  document.body.removeChild(link);
};

const handleLinkClick = (link)=>{
    setSelectedLink(link);
   // Navigate(`/${link}`)
};

useEffect(()=>{
    setSelectedLink('home')
},[]);
const renderComponent = ()=>{
    switch(selectedLink){
      case "home":
            return <Home/>
        // case "aboutus": 
        //   return <AboutUs/>
        // case "contactus":
        //     return <ContactUs/>
        // case "signin":
        //   return <UserLogin/>
        default:
          return null;
    }
}

    return (
       <>
   

     
       
      <div>
      <Navbar bg="dark" variant="dark" expand="lg">
              <Container>  
                <Navbar.Brand href="/">SUMIT PATIL </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link  onClick={()=>{handleLinkClick('home')}}> 
                      <FontAwesomeIcon icon={faUser}  /> 
                      &nbsp;About Me</Nav.Link>

                    <Nav.Link onClick={()=>{handleLinkClick('qualification')}}> 
                      <FontAwesomeIcon icon={faGraduationCap}  />
                      &nbsp;Qualification </Nav.Link>
                    <Nav.Link onClick={()=>{handleLinkClick('workexp')}}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    &nbsp;Work Experience </Nav.Link>

                    <Nav.Link onClick={()=>{handleLinkClick('projects')}}>
                    <FontAwesomeIcon icon={faProjectDiagram}  />
                    &nbsp;Projects</Nav.Link>
                    <Nav.Link  onClick={()=>{handleLinkClick('contactus')}}>
                    <FontAwesomeIcon icon={faEnvelope} />
                     &nbsp;Contact </Nav.Link>
                   <Nav.Link onClick={()=>{handleDownload()}}> <FontAwesomeIcon icon={faDownload}/> &nbsp;Resume </Nav.Link>
                   
                 
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
      </div>

      <div>
      {renderComponent()}
      </div>

      </>
    )
}
