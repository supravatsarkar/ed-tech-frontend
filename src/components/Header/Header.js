import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="container-fluid p-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold fs-2 text-white" >ED <span className='text-danger'>TECH</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/register">Register</Link>
                            </li> */}

                        </ul>
                        <div>
                            {

                                (user?.displayName || user?.email) ? <>

                                    <div className="mx-2">

                                        {
                                            user?.photoURL ? <img className="user-photo img-fluid  rounded-circle mx-1" src={user.photoURL} alt=".." /> :
                                                <img className="user-photo img-fluid border border-success rounded-circle mx-1" alt=".." />
                                        }

                                        {
                                            user?.displayName ? <span className="d-block text-white bg-success px-2 mt-1 rounded-pill">{user?.displayName}</span> : <span>
                                                <span className="d-block text-white bg-success px-2 mt-1 rounded-pill">{user?.email}</span>
                                                <small className="d-block text-danger">Name not available</small>
                                            </span>
                                        }
                                    </div>
                                    <div>
                                        <Button onClick={logOut} variant="danger" size="sm" className="mx-1 text-nowrap">Log Out</Button>
                                    </div>
                                </> :
                                    <>
                                        <Nav.Link as={NavHashLink}
                                            className="" smooth to="/login"><Button variant="danger" size="sm" className="mx-1 text-nowrap">Log In</Button></Nav.Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;