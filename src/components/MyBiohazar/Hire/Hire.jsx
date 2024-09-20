import { Container, Row, Col } from "react-bootstrap";

function Hire() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">Why hire <span className="safeHaz">SafeHaz Cleanup</span> for biohazard cleanup?</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">Unlike standard house or business cleaning, biohazard cleanup is a service that requires industry expertise, specialized equipment, and appropriate certifications. <span className="safeHaz">SafeHaz Cleanup</span> has developed a disinfection process backed by more than 20 years of research and experience to ensure your home or business is void of health and safety risks. Our discreet biohazard cleanup team handles all cases with compassion, professionalism, and efficiency. <span className="safeHaz">SafeHaz Cleanup</span> provides services following incidents involving biohazards, including crime scenes, trauma, or hazardous material spills, ensuring thorough decontamination and restoring the area to a safe state while adhering to all industry regulations.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Hire;