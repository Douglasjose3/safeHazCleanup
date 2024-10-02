import { Container, Row, Col } from "react-bootstrap"

function HoarderClean() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col lg={4}>
                    <h1 className="title">How do We Clean?</h1>
                </Col>
                <Col lg={7}>
                    <p className="paragraph">Hoarding cleanup presents complex health and safety hazards. We adhere to OSHA’s bloodborne pathogen regulations and practice universal precautions to protect our employees and customers. Our science-based process ensures that we contain the affected areas to prevent cross-contamination, remove all traces of biological materials, disinfect and deodorize, and test to confirm that the affected areas are free of pathogens. We are diligent and thorough because we understand that the health and safety of you and your family are on the line.
                        Whether you need hoarder cleanup for a friend, a loved one, or even yourself—when you’re ready to get help, <span className="safeHaz">SafeHaz Cleanup</span> is there. Our job is not to judge; our job is to clean and disinfect so your home is safe and livable again.
                        Call us 24 hours a day, 7 days a week with questions or contact us to learn more about our hoarding cleanup and biohazard removal services.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default HoarderClean;