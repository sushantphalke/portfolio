import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
    return (
        <Card className='quote-card-view'>
            <Card.Body>
                <blockquote className='blockquote mb-0'>
                    <p style={{ textAlign: 'justify' }}>
                        Hi Everyone, 
                        <br />
                        I am{' '}
                        <span className='purple'>SUSHANT PHALKE </span>
                        from{' '}
                        <span className='purple'> Pune, MaharaSHtra, India.</span>
                        <br />I'm a undergraduate pursuing <span className='purple'>B.E. Computer Engineering</span> from Governmemnt College of Engineerning and Research, Pune
                        <br />
                        Graduating in mid June 2023 😊
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className='about-activity'>
                            <ImPointRight /> Playing Games
                        </li>
                        <li className='about-activity'>
                            <ImPointRight /> Writing Tech Blogs
                        </li>
                        <li className='about-activity'>
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: 'rgb(155 126 172)' }}>
                        "Strive to build things that make a difference!"{' '}
                    </p>
                    <footer className='blockquote-footer'>the ace SH</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
