import MyNavBar from "../../components/MyNavBar/MyNavBar";
import TakeOver from "../../components/MyMold/TakeOver";
import Step from "../../components/MyMold/Step";
import MyTeam from "../../components/MyMold/MyTeam";

import Footer from "../../components/Footer/Footer";

function Mold() {
    return (
        <div id="mold">
            <MyNavBar />

            <div className="secaoAbre">
                <img src="/mold.png" alt="" className="secaoImg" />
                <h3 className="secaoTitle">Mold Remediation</h3>
            </div>

            <div className="mt-5">
                <TakeOver />
            </div>

            <div className="mt-5">
                <Step />
            </div>

            <div className="mt-5 mb-5">
                <MyTeam />
            </div>

            <Footer />
        </div>
    )
}

export default Mold;