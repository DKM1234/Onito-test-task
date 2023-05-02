import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Layout = () => {
    return (
        <>
            <Navbar bg="info">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/"><Button>Form</Button></Link>
                        <p>&nbsp;&nbsp;&nbsp;</p>
                        <Link to="/table"><Button>Table</Button></Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
};

export default Layout;