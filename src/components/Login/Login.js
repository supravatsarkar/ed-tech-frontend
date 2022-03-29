import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, error, setError, logInUsingEmailPassword, handleEmailField, handlePasswordField, resetPassword, loading } = useAuth();
    console.log('from login-', loading);
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || '/home';

    // handle google login 
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
                console.log('Sign with google success');
            })
            .catch(error => {
                setError('Error in google signIn-', error.message);
            })
    }

    // handle email password login 
    const handleEmailAndPasswordLogin = (e) => {
        e.preventDefault();
        logInUsingEmailPassword()
            .then((userCredential) => {
                // Signed in 
                setError('');
                // console.log(userCredential.user);
                alert('Log In with email & password successful')
                // ...
                history.push(redirect_url);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return (
        <Container>
            <Row className="g-5 mb-3">
                <Col></Col>
                <Col xs={9} sm={7} lg={4}>
                    <div>
                        <h4>Please Login</h4>
                        <Button onClick={handleGoogleLogin} className="fw-bolder" variant="danger">Google</Button>
                        <h5>__________ or __________</h5>
                        <Form onSubmit={handleEmailAndPasswordLogin}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className="text-start">Email address</Form.Label>
                                <Form.Control onBlur={handleEmailField} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePasswordField} type="password" placeholder="Password" />
                            </Form.Group>
                            <p className="text-danger">{error}</p>
                            <Button className="" variant="danger" type="submit">
                                Login
                            </Button>
                            <br />

                            <Link to="/register" className="me-3">
                                <span >New User?</span>
                            </Link>
                            <span className="fw-bolder text-primary" onClick={resetPassword} style={{ cursor: "pointer" }}>Reset Password</span>

                            <p> <small className="text-muted">
                                By signing in, you agree to our Terms Of Use and Privacy Policy In addition, you also agree to receive email messages from us about your experience with our service, and features you can use.
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

export default Login;