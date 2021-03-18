import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HeroSection, HeroTitle, HeroSubTitle, LinkedIn, WhatsApp, Github } from './HeroElements'
import '../../assets/css/styles.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const Hero = ({ isDark }) => {
    console.log(isDark)
    return (
        <>
            <HeroSection isDark={isDark}>
                <Container>
                    <Row className="row h-100 justify-content-center align-items-center title-padding">
                        <Col className=" d-flex justify-content-center">
                            <HeroTitle isDark={isDark} >
                                I AM GILANG
                            </HeroTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <HeroSubTitle isDark={isDark}>
                                Information Systems student at National Development University of Jakarta
                            </HeroSubTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <a href="https://mail.google.com/mail/u/0/" target="_blank">
                                <LinkedIn isDark={isDark} />
                                <Github isDark={isDark} />
                                <WhatsApp isDark={isDark} />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </HeroSection>
        </>
    )
}

export default Hero