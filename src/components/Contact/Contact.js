import React from 'react';
import './Contact.css';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="my-4 container shadow bg-light px-0">
            <div className=" contact-section text-dark " id="contact">
                <div className="contact-container py-5">
                    <Container>

                        <div className="fw-bolder text-center">
                            <h1 className="text-center fw-bolder">Send Your  <span className="text-danger">Message Us</span></h1>
                            <h5 className="text-muted">Dont be shy, Send your message or quiries through below form, our expert team will help you ASAP.</h5>
                        </div>
                        <Form>
                            <Row xs={1} md={2} className="g-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control type="text" placeholder="Name*" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Message</Form.Label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="danger" >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </div>
            </div >
        </div>
    );
};

export default Contact;