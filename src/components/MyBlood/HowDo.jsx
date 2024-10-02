import { Container, Row, Col } from "react-bootstrap"


function HowDo() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">How Do Clean?</h1>
                </Col>
                <Col lg={6}>
                    <p className="paragraph">Biohazard situations pose serious health and safety risks. At <span className="safeHaz">SafeHaz Cleanup</span>, we strictly adhere to OSHA’s bloodborne pathogen regulations and implement universal precautions to ensure the safety of our team and clients. Our scientifically developed cleaning process involves containing the affected areas to prevent cross-contamination, thoroughly removing all traces of blood and biological materials, disinfecting and deodorizing the site, and conducting tests to verify the area is free from pathogens. We take every precaution to safeguard the health and well-being of you and your loved ones.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HowDo