import { Col, Container, Row } from "react-bootstrap";
import MyNavBar from "../../components/MyNavBar/MyNavBar";
import BioCompany from "../../components/MyBiohazar/BioCompany/BioCompany";
import BioServices from "../../components/MyBiohazar/BioServies/BioServices";
import Footer from "../../components/Footer/Footer";
import './biohazard.css';
import BioProcess from "../../components/MyBiohazar/BioProcess/BioProcess";

function Biohazard() {
    return (
        <div id="biohazard">
            <MyNavBar />
            <div className="bioAbre">
                <img className="bioImg" src="/biohazard.png" alt="" />
                <h3 className="bioTexto">Biohazard Cleanup</h3>
            </div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col lg={4}>
                        <h1 className="title">Why hire <span className="safeHaz">SafeHaz Cleanup</span> for biohazard cleanup?</h1>
                    </Col>
                    <Col lg={6}>
                        <p className="paragraph">Unlike standard house or business cleaning, biohazard cleanup is a service that requires industry expertise, specialized equipment, and appropriate certifications. Aftermath has developed a 5-step disinfection process backed by more than 20 years of research and experience to ensure your home or business is void of health and safety risks.
                            Our discreet biohazard cleanup team handles all cases with compassion, professionalism, and efficiency. Aftermath serves the entire U.S. and is able to be at your doorstep within a few hours of your call.
                        </p>
                    </Col>

                    <div className="mt-5">
                        <BioCompany />
                    </div>

                    <div className="mt-5">
                        <BioProcess />
                    </div>

                    <div className="mt-5">
                        <BioServices />
                    </div>
                </Row>
            </Container>

            <div className="mt-5">
                <Footer />
            </div>
        </div>
    )
}

export default Biohazard;