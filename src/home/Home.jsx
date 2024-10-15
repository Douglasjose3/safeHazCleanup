import MyNavBar from "../components/MyNavBar/MyNavBar";
import MyCarousel from "../components/MyCarousel/MyCarousel";
import Sobre from "../components/Sobre/Sobre";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Services from "../components/Servies/Services";
import ClientRegistration from "../components/ClientRegistration/ClientRegistration";

function Home() {
    return (
        <>
            <MyNavBar />
            <MyCarousel />
            <Sobre />
            <Cards/>
            <div className="mb-5">
                <Services />
            </div>
            <ClientRegistration />
            
            <Footer />
        </>
    )
}

export default Home;