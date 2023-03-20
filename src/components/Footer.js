import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from 'react-icons/ai';
import { FaGreaterThanEqual, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className='footer'>
            <Row>
                <Col md='4' className='footer-copywright'>
                    <h3>Designed and Developed by SUSHANT PHALKE</h3>
                </Col>
                <Col md='4' className='footer-copywright'>
                    <h3>Copyright © {year} Sushant Phalke</h3>
                </Col>
                <Col md='4' className='footer-body'>
                    <ul className='footer-icons'>
                        <li className='social-icons'>
                            <a
                                href='https://github.com/sushantphalke'
                                style={{ color: 'white' }}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a
                                href='https://twitter.com/sushantphalke2'
                                style={{ color: 'white' }}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a
                                href='https://www.linkedin.com/in/sushantphalke/'
                                style={{ color: 'white' }}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a
                                href='https://www.leetcode.com/sushantphalke'
                                style={{ color: 'white' }}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <SiLeetcode />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;