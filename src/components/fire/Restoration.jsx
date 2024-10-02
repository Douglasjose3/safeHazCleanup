import { Container, Row, Col } from "react-bootstrap";

function Restoration() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">Restoring Your Property After Fire and Smoke Damage</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">Following a fire, the restoration process is not just about cleaning up the debris; it involves a meticulous approach to ensure the safety and health of all occupants. Fire damage restoration goes beyond mere aesthetics, addressing hidden dangers that could pose long-term risks if overlooked.
                        <strong> Comprehensive Assessment:</strong> Initially, trained Restorations conduct a thorough evaluation to identify not only visible damage but also hidden threats, such as structural weaknesses and lingering smoke residues. This assessment is crucial for formulating an effective restoration plan.
                        <strong> Advanced Cleaning Techniques:</strong> Fire-damaged properties often require specialized cleaning methods to remove soot, smoke odors, and hazardous residues. Techniques such as thermal fogging, ozone treatment, and high-efficiency particulate air (HEPA) filtration are utilized to restore air quality and eliminate harmful particles.
                        <strong> Water Damage Mitigation:</strong> The water used by firefighters to extinguish flames can lead to additional complications, such as mold growth and structural damage. Restoration experts prioritize water extraction, drying, and dehumidification to safeguard your property from these secondary effects.
                        <strong> Emotional Support:</strong> Beyond the physical aspects of restoration, the emotional toll of a fire can be overwhelming. Engaging a professional restoration service provides not only technical expertise but also a compassionate approach to help families navigate this challenging time.
                        At <span className="safeHaz">SafeHaz Cleanup</span>, we understand that fire damage restoration is a multifaceted process that requires both technical skill and empathy. Our team is committed to restoring your property while ensuring your peace of mind during this difficult journey.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Restoration;