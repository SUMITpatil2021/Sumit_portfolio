import React, { useEffect,useRef,useState } from "react";
import { Link } from "react-scroll";
import { useNavigate, Routes} from "react-router-dom";
import { Nav,Navbar,Container} from "react-bootstrap";



import Home from "./home";

export default  function LandingPage(){



const Navigate = useNavigate();
const[selectedLink, setSelectedLink] = useState("home");

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
                    <Nav.Link  onClick={()=>{handleLinkClick('home')}}>About Me</Nav.Link>
                    {/* <Nav.Link onClick={()=>{handleLinkClick('')}} */}
                    <Nav.Link  onClick={()=>{handleLinkClick('contactus')}}>Contact </Nav.Link>
                   
                   
                 
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
