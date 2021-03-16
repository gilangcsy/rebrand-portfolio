import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HeroSection, HeroTitle, HeroSubTitle } from './HeroElements'

class Hero extends Component {
    render() {
        return (
            <>
                <HeroSection>
                    <Container>
                        <Row className="row h-100 justify-content-center align-items-center">
                            <Col className=" d-flex justify-content-center">
                                <HeroSubTitle>
                                    I AM
                                </HeroSubTitle>
                                <HeroTitle>
                                    GILANG
                                </HeroTitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col className=" d-flex justify-content-center">
                                <HeroSubTitle>
                                    Front-end web developer at BidIkan Indonesia
                                </HeroSubTitle>
                            </Col>
                        </Row>
                    </Container>
                </HeroSection>
            </>
        )
    }
}

export default Hero