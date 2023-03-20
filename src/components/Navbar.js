import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { CgGitFork } from 'react-icons/cg';
import { ImLinkedin} from 'react-icons/im';
import {

    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from 'react-icons/ai';

import { CgFileDocument } from 'react-icons/cg';
import { SiLeetcode } from 'react-icons/si';

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener('scroll', scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed='top'
            expand='md'
            className={navColour ? 'sticky' : 'navbar'}
        >
            <Container>
                <Navbar.Brand href='/' className='d-flex'>
                    {/* <img src={logo} className='img-fluid logo' alt='brand' /> */}
                    {/* <h6 className='img-fluid logo' alt='brand'>SU<span style={{fontSize:'180%'}}>SH</span>ANT</h6> */}
                    <h5 className='img-fluid logo' alt='brand'>
                        SH
                    </h5>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls='responsive-navbar-nav'
                    onClick={() => {
                        updateExpanded(expand ? false : 'expanded');
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto' defaultActiveKey='#home'>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to='/'
                                onClick={() => updateExpanded(false)}
                            >
                                <Button>
                                    <AiOutlineHome
                                        style={{ marginBottom: '2px' }}
                                    />
                                    &nbsp;Home
                                </Button>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to='/about'
                                onClick={() => updateExpanded(false)}
                            >
                                <Button>
                                    <AiOutlineUser
                                        style={{ marginBottom: '2px' }}
                                    />
                                    &nbsp;About
                                </Button>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to='/project'
                                onClick={() => updateExpanded(false)}
                            >
                                <Button>
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: '2px' }}
                                    />
                                    &nbsp;Projects
                                </Button>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to='/resume'
                                onClick={() => updateExpanded(false)}
                            >
                                <Button>
                                    <CgFileDocument
                                        style={{ marginBottom: '2px' }}
                                    />{' '}
                                    Resume
                                </Button>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href='https://www.linkedin.com/in/sushantphalke/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Button>
                                    {' '}
                                    <ImLinkedin
                                        style={{ marginBottom: '2px' }}
                                    />{' '}
                                    Linkedin
                                </Button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                href='https://www.leetcode.com/sushantphalke/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Button>
                                    {' '}
                                    <SiLeetcode
                                        style={{ marginBottom: '2px' }}
                                    />{' '}
                                    LeetCode
                                </Button>
                            </Nav.Link>
                        </Nav.Item>

                        {/* <Nav.Item>
                            <Nav.Link
                                href='https://github.com/sushantphalke'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Button>
                                    {' '}
                                    <ImGithub
                                        style={{ marginBottom: '2px' }}
                                    />{' '}
                                    Github
                                </Button>
                            </Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
