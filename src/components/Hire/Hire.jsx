import { Container, Row, Col } from "react-bootstrap";

function Hire() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">Why Hire <span className="safeHaz">SafeHaz Cleanup</span> for Biohazard Cleanup?</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">Unlike standard house or business cleaning, <strong>biohazard cleanup</strong> is a service that requires <strong>industry expertise</strong>, <strong>specialized equipment</strong>, and <strong>appropriate certifications</strong>. <span className="safeHaz">SafeHaz Cleanup</span> has developed a disinfection process backed by more than 20 years of research and experience to ensure your home or business is void of <strong>health and safety risks</strong>. Our discreet biohazard cleanup team handles all cases with <strong>compassion</strong>, <strong>professionalism</strong>, and <strong>efficiency</strong>. <span className="safeHaz">SafeHaz Cleanup</span> provides services following incidents involving <strong>biohazards</strong>, including <strong>crime scenes</strong>, <strong>trauma</strong>, <strong>blood cleanup</strong>, <strong>death cleanup</strong>, <strong>removal of human waste</strong>, <strong>mold</strong>, or <strong>hazardous material spills</strong>, ensuring <strong>thorough decontamination</strong> and restoring the area to a <strong>safe state</strong> while adhering to all <strong>industry regulations</strong>. <strong>We offer 24-hour emergency biohazard cleanup services</strong> to ensure timely and efficient response during critical situations.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Hire;