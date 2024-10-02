import Footer from "../../components/Footer/Footer";
import MyNavBar from "../../components/MyNavBar/MyNavBar";
import Damage from "../../components/MySmoke/Damage";
import Risks from "../../components/MySmoke/Risks";
import Solutions from "../../components/MySmoke/Solutions";
import Toxic from "../../components/MySmoke/Toxic";
import Understanding from "../../components/MySmoke/Understanding";


function Smoke() {
    return (
        <div className="smoke">
            <MyNavBar />

            <div className="secaoAbre">
                <img className="secaoImg" src="smoke.png" alt="" />
                <h1 className="secaoTitle">Smoke Remediation</h1>
            </div>

            <div className="mt-5">
                <Damage />
            </div>

            <div className="mt-5">
                <Solutions />
            </div>

            <div className="mt-5">
                <Risks />
            </div>

            <div className="mt-5">
                <Toxic />
            </div>

            <div className="mt-5">
                <Understanding />
            </div>

            <div className="mt-5">
                <Footer />
            </div>
        </div>
    )
}

export default Smoke;