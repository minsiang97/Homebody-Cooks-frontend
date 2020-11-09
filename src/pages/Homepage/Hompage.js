import React from 'react';
import '../Homepage/homepage.css';
import Heroimage from '../../images/hero4.png';
import Browserimg from '../../images/Browser1.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Homepage = () => {
    return (
        <>
            <Container fluid className = "p-0">
                <Row className = "m-0">
                    <Col sm = {12} className = "hero p-0">
                        <img src = {Heroimage} alt="ingredients"/>
                        <div className="herotext">
                            <h2>Don't stress Over Your Meals,</h2>
                            <h2>We'll Take Care of It.</h2>
                            <span>Fresh Ingredients Delivered to Your Doorstep.</span>
                            <button>Join Today</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className = "steps-section p-0">
                <Row className = "my-5 mx-0">
                    <Col sm={12} md = {6} className = "p-0 d-flex justify-content-end">
                        <img className = "steps-img" src = {Browserimg} alt = "Choosing Meal" />
                    </Col>
                    <Col sm={12} md = {6} className = "p-0">
                        <h4>Select Your Desired Meals</h4>
                        <p>Choose from our chef concocted meals.</p>
                        <p>Enjoy delicious local cuisines or international flavors.</p>
                        <p>Whatever your heart and taste-buds desires. </p>
                    </Col>
                </Row>
                <Row className = "mb-5 mx-0">
                    <Col sm={12} md = {6} className = "p-0 d-flex flex-column align-items-end">
                        <h4>Unpack Your Ingredients</h4>
                        <p>Unpack the fresh ingredients that was</p>
                        <p>delivered right to your doorstep.</p>
                    </Col>
                    <Col sm={12} md={6} className = "p-0">
                        <img className = "steps-img" src = {Browserimg} alt = "Choosing Meal" />
                    </Col>
                </Row>
                <Row className = "mb-5 mx-0">
                    <Col sm = {12} md = {6} className = "p-0 d-flex justify-content-end">
                        <img className = "steps-img" src = {Browserimg} alt = "Choosing Meal" />
                    </Col>
                    <Col sm = {12} md = {6} className = "p-0">
                        <h4>Cook And Enjoy</h4>
                        <p>Follow our easy recipes and enjoy the joy of cooking.</p>
                        <p>Enjoy delicious local cuisines or international flavors.</p>
                        <p>Whatever your heart and taste-buds desires. </p>
                    </Col>
                </Row>
                <Row className = "justify-content-center mx-0">
                    <Col sm = {12} className = "p-0 d-flex justify-content-center">
                        <img className = "cta-img m-0" src = {Browserimg} alt = "Choosing Meal" />
                    </Col>
                    <Col sd = {12} className = "p-0 mb-5 d-flex flex-column align-items-center">
                        <h4>Starting from RM 88</h4>
                        <p>No commitment. Cancel at anytime.</p>
                        <button className="cta-button">Join Today</button>
                    </Col>
                </Row>
            </Container>
            <footer className = "footer">
                <a href ="#">Contact Us</a>
                <h6>HomeBody Cooks</h6>
                <a href ="#">FAQs</a>
            </footer>
        </>
    )
}

export default Homepage;
