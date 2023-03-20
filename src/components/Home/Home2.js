import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
    AiFillGithub,
    AiOutlineTwitter,

} from 'react-icons/ai';
import { FaLinkedinIn ,FaGreaterThanEqual} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Home2() {
    return (
        <Container fluid className='home-about-section' id='about'>
            <Container>
                <Row>
                    <Col md={8} className='home-about-description'>
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className='purple'> INTRODUCE </span>{' '}
                            MYSELF
                        </h1>
                        <p className='home-about-body'>
                            Highly motivated and skilled software professional
                            with 4 months of experience in working with modern
                            technologies like Javascript/Typescript, React,
                            NodeJS, NextJS, Data Structures and other frameworks
                            and libraries, currently looking for a new and
                            challenging opportunity. know more about me and my
                            skills at
                            <br />
                            <br />
                            <b className='purple'>Leetcode</b> (450+ DSA
                            problems, contest rating:1516)
                            <br /> <b className='purple'>GeeksForGeeks</b> (top
                            10 in the institute)
                            <br /> <b className='purple'>Github</b> (Projects
                            and UI repositories)
                            <br /> <br />
                            Whenever possible, I also apply my passion for
                            developing products with{' '}
                            <b className='purple'>Node.js</b> and
                            <i>
                                <b className='purple'>
                                    {' '}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className='purple'> React.js and Next.js</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className='myAvtar'>
                        <Tilt>
                            <img
                                src={'https://avatars.githubusercontent.com/u/77383095?v=4'}
                                className='img-fluid'
                                alt='avatar'
                                style={{borderRadius:'40px'}}
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='home-about-social'>
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{' '}
                            <span className='purple'>connect </span>with me
                        </p>
                        <ul className='home-about-social-links'>
                        <li className='social-icons'>
                                <a
                                    href='https://www.linkedin.com/in/sushantphalke/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        <li className='social-icons'>
                                <a
                                    href='https://www.leetcode.com/sushantphalke/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <SiLeetcode/>
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://github.com/sushantphalke'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a
                                    href='https://twitter.com/sushantphalke2'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='icon-colour  home-social-icons'
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                           
                            
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
