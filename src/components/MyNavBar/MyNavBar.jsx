import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './myNavBar.css';

function MyNavBar() {
    return (
        <Navbar expand="lg" className="navBar" sticky='top'>
            <Container>
                <a href="/"><img className='navImg' src="/logoOrange.png" alt="Logo" /></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navMenu">
                        <Nav.Link className='bold' href="/">About</Nav.Link>
                        <NavDropdown className='bold' title="Cleanup Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="biohazard">Biohazard Cleanup</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Crime Scene And Trauma Cleanup</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Decomposition Odor Removal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Blood Cleanup</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fire Damage Restoration</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hoarder Cleanup Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mold Remediation</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Smoke Remediation</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Water Damage Restoration</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className='callContent'>
                    <h4 className='navCall'><span className='call'>Call Now</span> (510) 610-9964</h4>
                </div>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;

