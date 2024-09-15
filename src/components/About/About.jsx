import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';

function About() {
    return (
        <Container id="/">
            <div className="imgAboutDiv">
                <img className='imgAbout' src="/logoOrange.png" alt="Logo" />
            </div>
            <Row>
                <Col lg={4}>
                    <h1 className="title">Especialistas em Limpeza e Remediação de Riscos</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">
                        At <span className="safeHaz">SafeHaz Cleanup</span>, we specialize in cleaning and remediating areas contaminated by hazardous substances, mold, water damage, biohazards, and decomposition. Our highly trained and certified team ensures the safe restoration of environments, eliminating risks to health and the environment. We serve residential, commercial, and public institutions with complete discretion, efficiency, and a focus on safety. By utilizing advanced technologies and rigorous procedures, we restore your space to the safe and clean condition you need.
                    </p>
                </Col>
            </Row>
            <div className="mt-5">
            </div>
        </Container>
    )
}

export default About;