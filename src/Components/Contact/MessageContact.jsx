import React, { useState } from 'react'

import emailjs from '@emailjs/browser';

import { Col, Container, Form, Row } from 'react-bootstrap'
// import Button
import Button from 'react-bootstrap/Button';



const MessageContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the data to the server
        const serviceId = "service_7d8emeq";
        const templateId = "template_w0kq4z3";
        const publicKey = "pu3VVbxuaGyunrZSu";

        // create a new object with the data
        const templateParams = {
            form_name: name,
            form_email: email,
            to_name: "web_Wizard",
            message: message,
        };

        // send the email using emailjs
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email Sent Successfully:', response);
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log('Error Sending Email:', error);
            });
    }

    return (
        <Container className='py-4 message'>
            <Row>
                <Col lg={12} className=" py-4">
                    <h2 className='fw-bold text-orange py-2'>Leave Us a Message</h2>
                    <p className=' lead'>We are always happy to hear from you. Please feel free to contact us with any questions or comments you may have. We will respond to your message as soon as possible.</p>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={9}>
                    <Form className=' rounded p-2 ' onSubmit={handleSubmit}>

                        <div className='d-flex justify-content-between mb-3'>

                            <Col lg={12} className="p-3">
                                <label for="exampleFormControlInput1" className="form-label fw-bold">Name</label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your name"
                                />
                            </Col>

                            <Col lg={12} className="p-3">
                                <Form.Label for="exampleFormControlInput1" className="form-label fw-bold">Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    required />
                            </Col>

                        </div>
                        <Col lg={12}>
                            <Form.Label for="exampleFormControlTextarea1" className="form-label p-2 fw-bold">Message</Form.Label>
                            <textarea
                                required
                                className="form-control mb-3"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Enter your message here" />
                        </Col>
                        <Button className="btn bg-orange border-0 p-3 rounded-3 text-white" type="submit" onclick="sendEmail()">SEND MESSAGE</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default MessageContact