import React, { useEffect,  useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faEnvelope, faCode, faProjectDiagram, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faBlogger, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { BsTwitterX } from "react-icons/bs";


import Home from "./home";
import Qualification from "./qualification";
import ProjectCompo from "./projectCompo";
import ContactCompo from "./contactCompo";
import Skills from "./skills";


export default function LandingPage() {




  const [selectedLink, setSelectedLink] = useState("home");

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

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    // Navigate(`/${link}`)
  };

  useEffect(() => {
    setSelectedLink('home')
  }, []);
  const renderComponent = () => {
    switch (selectedLink) {
      case "home":
        return <Home />
      case "qualification": 
        return <Qualification/>
      
      case "projects":
          return <ProjectCompo/>
          case "skills":
            return <Skills/>
      case "contactus":
        return <ContactCompo/>
      default:
        return null;
    }
  }

  return (
    <> 
      <div> 
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="/">SUMIT PATIL </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link onClick={() => { handleLinkClick('home') }}>
                  <FontAwesomeIcon icon={faUser} />
                  &nbsp;About Me</Nav.Link>

                <Nav.Link onClick={() => { handleLinkClick('qualification') }}>
                  <FontAwesomeIcon icon={faGraduationCap} />
                  &nbsp;Qualification </Nav.Link>
                  <Nav.Link onClick={() => { handleLinkClick('skills') }}>
                  <FontAwesomeIcon icon={faCode}  />
                  &nbsp;Skills </Nav.Link>

                <Nav.Link onClick={() => { handleLinkClick('projects') }}>
                  <FontAwesomeIcon icon={faProjectDiagram} />
                  &nbsp;Projects</Nav.Link>
                <Nav.Link onClick={() => { handleLinkClick('contactus') }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp;Get In Touch  </Nav.Link>
                <Nav.Link onClick={() => { handleDownload() }}> <FontAwesomeIcon icon={faDownload} /> &nbsp;Resume </Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        {renderComponent()}
      </div> 

      <div style={footerBottomStyle}>
      <div className="icon-container">
     
                        <a href="https://www.linkedin.com/in/sumit-patil-08b163191" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FontAwesomeIcon icon={faLinkedin} className="fa linkedin-icon" size="2x" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCO2nMMkQBxszjqHm4V2SVnA" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FontAwesomeIcon icon={faYoutube} className="fa youtube-icon" size="2x" />
                        </a>
                        <a href="https://swarajyatechh.blogspot.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FontAwesomeIcon icon={faBlogger} className="fa blogger-icon" size="2x" />
                        </a> 
                        <a href="https://www.instagram.com/sumitpatil2021" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FontAwesomeIcon icon={faInstagram} className="fa instagram-icon" size="2x" />
                        </a>
                        <a href="https://twitter.com/sumitpatil2021" target="_blank" rel="noopener noreferrer" className="icon-link">
                            {/* <FontAwesomeIcon icon={faTwitter} className="fa twitter-icon" size="2x" /> */}
                            <span className="fa twitter-icon"> <BsTwitterX /></span> 
                        </a> 
                        <a href="https://github.com/SUMITpatil2021" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FontAwesomeIcon icon={faGithub} className="fa github-icon" size="2x" />
                   
                </a>


                    </div>       
        <p>&copy; 2024 Sumit Patil | All rights reserved.</p>
    </div>

    </>
  )
}

const footerBottomStyle = {
  textAlign: 'center',
  padding: '10px 0',
  borderTop: '1px solid #495057',
  marginTop: '20px'
};