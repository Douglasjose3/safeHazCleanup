/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap";
import MyNavBar from "../../components/MyNavBar/MyNavBar";
import Hire from "../../components/Hire/Hire";
import Process from "../../components/MyBiohazar/Process/Process";
import Professional from "../../components/CrimeScene/Professional/Professional";
import CleanScenes from "../../components/CrimeScene/CleanScenes/CleanScenes";
import Footer from "../../components/Footer/Footer";
import Remediation from "../../components/MyBiohazar/Remediation/Remediation";
import Services from "../../components/Servies/Services";

function Crime() {
    return (
        <div id="crimeScene">
            <MyNavBar />

            <div className="secaoAbre">
                <img src="/crime.png" alt="" className="secaoImg" />
                <h3 className="secaoTitle">Crime Scene <br />& Trauma Cleanup</h3>
            </div>

            <Container>
                <div className="mt-5">
                    <Hire />
                </div>
                
                <div className="mt-5">
                    <Process />
                </div>

                <div className="mt-5">
                    <Professional />
                </div>

                <div className="mt-5">
                    <CleanScenes />
                </div>

                <div className="mt-5">
                    <Remediation />
                </div>

                <div className="mt-5">
                    <Services />
                </div>

            </Container>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
    )
}

export default Crime;