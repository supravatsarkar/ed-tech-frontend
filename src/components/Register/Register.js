import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import useAuth from '../Hooks/useAuth';
import {
    useHistory,
    useLocation
} from "react-router-dom";

const Register = () => {
    const { handleEmailField, handlePasswordField, registerUsingEmailPassword, error, setError, signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
                console.log('Sign with Google Success');
            })
            .catch(error => {
                setError('Error in google signIn-', error.message);
            })
    }

    const handleRegisterUsingEmailPassword = (e) => {
        e.preventDefault();
        registerUsingEmailPassword()
            .then((userCredential) => {
                // Signed in 
                history.push(redirect_url);
                setError('')
                alert('Registration Successful.');

            })
            .catch((error) => {
                // ..
                setError(error.message);
            });
    }
    return (
        <Container>
            <Row className="g-5 mb-3">
                <Col></Col>
                <Col xs={9} sm={5} lg={4}>
                    <div>
                        <h4>Sign up to get started</h4>
                        <Button onClick={handleGoogleLogin} className="fw-bolder" variant="danger">Google</Button>
                        <h5>__________ or __________</h5>
                        <Form onSubmit={handleRegisterUsingEmailPassword}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="text-start">Email address</Form.Label>
                                <Form.Control onBlur={handleEmailField} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label>Password (At least 6 characters)</Form.Label>
                                <Form.Control onBlur={handlePasswordField} type="password" placeholder="Password" />
                            </Form.Group>
                            <p className="text-danger">{error}</p>
                            <Button variant="danger" type="submit">
                                Register
                            </Button>
                            <br />
                            <Link to="/login"><span className="me-3">Already Registered?</span></Link>
                            <p> <small className="text-muted">
                                By clicking "Register" you agree to our Terms Of Use and Privacy Policy In addition, you also agree to receive email messages from us about your experience with our service, and features you can use.
                            </small>
                            </p>
                        </Form>
                    </div>
                </Col>
                <Col></Col>
            </Row>

        </Container>
    );
};

export default Register;