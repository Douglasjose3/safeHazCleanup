import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './myNavBar.css';

import { useEffect, useState } from "react";
//useState é o estado
//useEffects 

function MyNavBar() {
    const [backgroundColor, setBackgroundColor] = useState("navBar");
    // estado backgroundColor precisa de dois valores - // valor inicial navBar.
    // primeiro valor para acessar e o segundo para alterar.

    const [bgButton, setBgButton] = useState("navCall");
    const [imgLogo, setImgLogo] = useState("/logoOrange.png")
    const [btnToggle, setbtnTogggle] = useState("buttonToggle")

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // scroll é o nome do evento, não deve ser chamado em nenhum lugar, parâmetro
        //handleScroll é a função
        return () => {
            window.removeEventListener("scroll", handleScroll); // Limpeza do event listener, limpa o cache.
        };
    }, []); // [] impede o loop, só será montando uma vez.

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 137.98) {
            setBackgroundColor("navBarScroll"); // Cor quando scroll passa de 50px
            setBgButton("bgButtonHover");
            setImgLogo("/logo.png");
            setbtnTogggle('btnToggleHover')
        } else {
            setBackgroundColor("navBar"); // Cor inicial
            setBgButton("navCall");
            setImgLogo("/logoOrange.png");
            setbtnTogggle("buttonToggle")
        }
    };

    return (
        <Navbar expand="lg" className={backgroundColor} sticky='top'>
            <Container>
                <a href="/"><img className='navImg' src={imgLogo} alt="Logo" /></a>
                <Navbar.Toggle aria-controls={btnToggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navMenu">
                        <Nav.Link className='bold' href="#about">About</Nav.Link>
                        <NavDropdown className='bold' title="Cleanup Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="biohazard">Biohazard Cleanup</NavDropdown.Item>
                            <NavDropdown.Item href="crimeScene">Crime Scene & Trauma Cleanup</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Decomposition Odor Removal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Blood Cleanup</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fire Damage Restoration</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hoarder Cleanup Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mold Remediation</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Smoke Remediation</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Water Damage Restoration</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {/* <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className='callContent'>
                    <h4 className={bgButton}><span className='call'>Call Now</span> (510) 610-9964</h4>
                </div>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;

