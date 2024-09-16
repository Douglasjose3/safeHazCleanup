import Carousel from "react-bootstrap/Carousel";
import { Button } from 'react-bootstrap';
import './myCarousel.css'


function MyCarousel() {
    return (
        <Carousel className='slides' interval={3000}>
            <Carousel.Item>
                <img className="carouselImg" src="/biohazard.png" alt="Biohazard" />
                <Carousel.Caption>
                    <div className="boxCarousel">
                        <h3 className='titleCarousel'>Biohazard Cleanup</h3>
                        <Button className='buttonCarousel'>Call Now <span className='navSpan'>(510) 610-9964</span></Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carouselImg" src="/crime.png" alt="Crime Scene" />
                <Carousel.Caption>
                    <div className="boxCarousel">
                        <h3 className='titleCarousel'>Crime Scene And Trauma Cleanup</h3>
                        <Button className='buttonCarousel'>Call Now <span className='navSpan'>(510) 610-9964</span></Button>
                        {/* <p className='paragraphCarousel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carouselImg" src="/decomp.png" alt="Decomposition" />
                <Carousel.Caption>
                    <div className="boxCarousel">
                        <h3 className='titleCarousel'>Decomposition Odor Removal</h3>
                        <Button className='buttonCarousel'>Call Now <span className='navSpan'>(510) 610-9964</span></Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carouselImg" src="./blood.png" alt="Blood" />
                <Carousel.Caption>
                    <div className="boxCarousel">
                        <h3 className='titleCarousel'>Blood Cleanup</h3>
                        <Button className='buttonCarousel'>Call Now <span className='navSpan'>(510) 610-9964</span></Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carouselImg" src="/fire.png" alt="Fire in the house" />
                <Carousel.Caption>
                    <div className="boxCarousel">
                        <h3 className='titleCarousel'>Fire Damage Restoration</h3>
                        <Button className='buttonCarousel'>Call Now <span className='navSpan'>(510) 610-9964</span></Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carouselImg" src="/hoarder.png" alt="Hoarder" />
                <Carousel.Caption>
                    <div className="boxCarousel">
                        <h3 className='titleCarousel'>Hoarder Cleanup Services</h3>
                        <Button className='buttonCarousel'>Call Now <span className='navSpan'>(510) 610-9964</span></Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carouselImg" src="/mold.png" alt="Mold" />
                <Carousel.Caption>
                    <div className="boxCarousel">
                        <h3 className='titleCarousel'>Mold Remediation</h3>
                        <Button className='buttonCarousel'>Call Now <span className='navSpan'>(510) 610-9964</span></Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carouselImg" src="/smoke.png" alt="Smoke" />
                <Carousel.Caption>
                    <div className="boxCarousel">
                        <h3 className='titleCarousel'>Smoke Remediation</h3>
                        <Button className='buttonCarousel'>Call Now <span className='navSpan'>(510) 610-9964</span></Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carouselImg" src="/water.png" alt="Water damage" />
                <Carousel.Caption>
                    <div className="boxCarousel">
                        <h3 className='titleCarousel'>Water Damage Restoration</h3>
                        <Button className='buttonCarousel'>Call Now <span className='navSpan'>(510) 610-9964</span></Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MyCarousel;
