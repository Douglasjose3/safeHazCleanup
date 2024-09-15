import About from "../components/about/About";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import MyCarousel from "../components/MyCarousel/MyCarousel";
import MyNavBar from "../components/MyNavBar/MyNavBar";

function Home() {
    return (
        <>
            <MyNavBar />
            <MyCarousel />
            <About />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;