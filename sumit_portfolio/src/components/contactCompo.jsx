import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faBlogger, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.css'

export default function ContactCompo(){
    return(
        <>
     <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <div className="icon-container">
                <a href="mailto:sumit.patil2021@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
                    <div className="envelope-icon">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </div>
                </a>
                <a href="https://www.instagram.com/YOUR_INSTAGRAM_PROFILE" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://twitter.com/YOUR_TWITTER_PROFILE" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.blogger.com/YOUR_BLOGGER_PROFILE" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FontAwesomeIcon icon={faBlogger} size="2x" />
                </a>
            </div>
            <div className="col-md-6">
          <h4 style={styles.subHeading}>Send Us a Message</h4>
          <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label" style={styles.label}>Name</label>
    <input type="text" className="form-control" id="name" placeholder="Your Name" style={styles.input} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label" style={styles.label}>Email</label>
    <input type="email" className="form-control" id="email" placeholder="Your Email" style={styles.input} />
  </div>
  <div className="mb-3">
    <label htmlFor="subject" className="form-label" style={styles.label}>Subject</label>
    <input type="text" className="form-control" id="subject" placeholder="Subject" style={styles.input} />
  </div>
  <div className="mb-3">
    <label htmlFor="message" className="form-label"  style={styles.label}>Message</label>
    <textarea className="form-control" id="message" rows="4" placeholder="Your Message" style={styles.textarea}></textarea>
  </div>
  <button type="submit" className="btn btn-primary" style={styles.button}>Submit</button>
</form>

        </div>
        </div>
        </>
    )
} 
const styles = {
    contactContainer: {
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#343a40',
    },
    subHeading: {
      color: '#495057',
      marginBottom: '15px',
    },
    paragraph: {
      color: '#6c757d',
      lineHeight: '1.6',
      marginBottom: '15px',
    },
    list: {
      paddingLeft: '0',
    },
    listItem: {
      marginBottom: '10px',
      color: '#6c757d',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#495057',
      marginRight:'100%'
    },
    input: {
      borderRadius: '5px',
      borderColor: '#ced4da',
    },
    textarea: {
      borderRadius: '5px',
      borderColor: '#ced4da',
    },
    button: {
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      borderRadius: '5px',
    },
  };