import { Container, Row, Col, Card } from "react-bootstrap"
import './bioHoarding.css';

function BioHoarding() {
    return (
            <Container className="bioBg">
                <Row>
                    <Col lg={3}>
                        <h1 className="title">Hoarding Removal</h1>
                    </Col>
                    <Col lg={6}>
                        <p className="paragraph">
                            The <span className="safeHaz">SafeHaz Cleanup</span> has been in the business of helping residents for more than 20 years. Fielding calls and questions from folks with all types of hoarder-related service needs is something that we handle on a daily basis.
                            We aren’t in the business of judging people, but we are in the business of helping people find solutions. Restoring a customer’s environment back to a suitable living condition they feel comfortable in is our goal. The areas in which we provide hoarder cleaning services include but are not limited to:
                        </p>
                    </Col>

                    <Col lg={2}></Col>
                    <Col lg={3}></Col>
                    <Col lg={2}>
                        <Card className='ms-3 text-center'>
                            <Card.Body>
                                <Card.Title className=''>Homes</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card className='ms-3 text-center'>
                            <Card.Body>
                                <Card.Title className=''>Businesses</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2}>
                        <Card className='ms-3 text-center'>
                            <Card.Body>
                                <Card.Title className=''>Hotels</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
}

export default BioHoarding;