import { Container } from "react-bootstrap";
import MyNavBar from "../../components/MyNavBar/MyNavBar";
import Hire from "../../components/Hire/Hire";
import HoarderDesinfection from "../../components/MyHoarder/HoarderDesinfection";
import HoarderClean from "../../components/MyHoarder/HoarderClean";
import HoarderSevere from "../../components/MyHoarder/HoarderSevere";
import HoarderExpert from "../../components/MyHoarder/HoarderExpert";
import HoarderWhat from "../../components/MyHoarder/HoarderWhat";
import Services from "../../components/Servies/Services";
import Footer from "../../components/Footer/Footer";
import Process from "../../components/MyBiohazar/Process/Process";

function Hoarder() {
    return (
        <div id="hoarder">
            <MyNavBar />

            <div className="secaoAbre">
                <img src="/hoarder.png" alt="" className="secaoImg" />
                <h3 className="secaoTitle">Hoarder Cleanup Services</h3>
            </div>

            <Container>
                <div className="mt-5">
                    <Hire />
                </div>

                <div className="mt-5">
                    <HoarderDesinfection />
                </div>

                <div className="mt-5">
                    <HoarderClean />
                </div>

                <div className="mt-5">
                    <HoarderExpert />
                </div>

                <div className="mt-5">
                    <HoarderSevere />
                </div>

                <div className="mt-5">
                    <Services />
                </div>

                <div className="mt-5">
                    <HoarderWhat />
                </div>

                <div className="mt-5">
                    <Process />
                </div>

            </Container>
            <div className="mt-5">
                <Footer />
            </div>

        </div>

    )
}

export default Hoarder