import './footer.css';

function Footer() {
    return (
        <div className="footerBg">
            <div className='container'>
                <div className='footerContent'>
                    <img className='footerImg' src="/logo.png" alt="Logo" />
                    <h3 className='footerEmail'>nomedoemmail@safehazcleanup.com</h3>
                    <h4 className='footerCall'><span className='call'>Call Now</span> (510) 610-9964</h4>
                </div>
            </div>
            <div className="footerParagraph">
                <p className='footerP'>Content, including images, displayed on this website is protected by copyright laws. <br />Downloading, republication, retransmission or reproduction of content on this website is strictly prohibited. Terms of Use | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer;


{/* <Container>
                <Row className='footerContent'>
                <Col className='imgContent'>
                <img className='footerImg' src="/logo.png" alt="Logo" />
                </Col>
                <Col className='emailContent'>
                <h3 className='footerEmail'>nomedoemmail@safehazcleanup.com</h3>
                </Col>
                <Col className='callContent'>
                <h4 className='footerCall'><span className='call'>Call Now</span> (510) 610-9964</h4>
                </Col>
                </Row>
                <p className='footerP'>Content, including images, displayed on this website is protected by copyright laws. <br />Downloading, republication, retransmission or reproduction of content on this website is strictly prohibited. Terms of Use | Privacy Policy</p>
                </Container> */}