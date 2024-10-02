import Footer from "../../components/Footer/Footer";
import MyNavBar from "../../components/MyNavBar/MyNavBar";
import Residues from "../../components/fire/Residues";
import Restoration from "../../components/fire/Restoration";
import Restoring from "../../components/fire/Restoring";

function fire() {
    return (
        <div className="fire">
            <MyNavBar />

            <div className="secaoAbre">
                <img src="/fire.png" alt="Fire" className="secaoImg" />
                <h3 className="secaoTitle">Fire Damage Restoration</h3>
            </div>

            <div className="mt-5">
                <Restoring />
            </div>

            <div className="mt-5">
                <Residues />
            </div>

            <div className="mt-5">
                <Restoration />
            </div>

            <div className="mt-5">
                <Footer />
            </div>
        </div>
    )
}

export default fire;