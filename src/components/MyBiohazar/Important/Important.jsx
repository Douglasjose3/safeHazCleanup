import { Container, Row, Col } from "react-bootstrap";


function Important() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">Why is Proper Biohazard Cleanup & Disinfection so Important?</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">Proper biohazard cleanup is crucial due to the risk of exposure to bloodborne pathogens (BBP) like Hepatitis or MRSA. <span className="safeHaz">SafeHaz Cleanup</span> uses a safety-driven, science-based process to protect customers, employees, and properties. Their protocols adhere to OSHA standards, with teams equipped with personal protective equipment (PPE). Improper cleaning of blood and fluids can result in lingering bacteria, bad odors, and property damage. SafeHaz Cleanup ensures thorough disinfection using ATP tests to verify cleanliness, ensuring no pathogens remain and minimizing health risks.</p>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Important;