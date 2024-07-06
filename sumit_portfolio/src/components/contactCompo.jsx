import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import './contact.css'
import { TbMailCode } from "react-icons/tb";


export default function ContactCompo() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_617ula4', 'template_uprtg2j', formData, '_vKUiLuMON6y-D9mz')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: 'Trek',
                    text: 'Your Message sent ',
                    icon: 'success',
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to send your message. Please try again later.',
                    icon: 'error',
                });
            });

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <div className="contact-container">
                <div className="container-fluid py-5 contactContainer">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="card shadow-sm p-4">
                                <h4 className="subHeading mb-4">Get in Touch with Me <TbMailCode/> </h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={styles.input} // Apply input styles
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={styles.input} // Apply input styles
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            style={styles.input} // Apply input styles
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            rows="4"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            style={styles.textarea} // Apply textarea styles
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={styles.button}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                  
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
        marginRight: '100%'
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