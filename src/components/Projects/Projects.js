import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/leaf.png';
import emotion from '../../Assets/Projects/emotion.png';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import suicide from '../../Assets/Projects/suicide.png';
import Githublense from '../../Assets/Githublense.png';
import rrl from '../../Assets/rrl.png';
import contactv from '../../Assets/contactv.png';
import Finalyearproject from '../../Assets/Finalyearproject.png';

function Projects() {
    return (
        <Container fluid className='project-section'>
            <Particle />
            <Container>
                <h1 className='project-heading'>
                    My Recent <strong className='purple'>Works </strong>
                </h1>
                <p style={{ color: 'white' }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={contactv}
                            isBlog={false}
                            title='Contacts Vault'
                            description='Help users to log in to accounts and store, and manage their accounts with authentication. • Mail, call, and store personalized information about their contacts with Contact Vault.•Technologies: React, MongoDB, Express, node JS'
                            ghLink='https://github.com/sushantphalke/ContactVault'
                            demoLink=''
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={Finalyearproject}
                            isBlog={false}
                            title='Personalise College Recommandation'
                            description='Developed solution for the students that will be helpful for finding the best college for them based on their CET score and other related information (locality, type
                            of college, preferred branches & colleges etc.)'
                            ghLink='https://github.com/soumyajit4419/Bits-0f-C0de'
                            demoLink='https://blogs.soumya-jit.tech/'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={rrl}
                            isBlog={false}
                            title='rrlgcoeara.in'
                            description='Worked on development of website. Where technologies like React for Front end, node JS forbackend and Firebase for database were used'
                            ghLink='https://github.com/rrlgcoeara/rrl'
                            demoLink='https://rrlgcoeara.in/'
                        />
                    </Col>

                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={Githublense}
                            isBlog={false}
                            title='Github Lense'
                            description={`Fetches data from GitHub using API and present its analysis in from of well-formatted data,Graphs, and in charts. Every user's data is organised so that everyone may see theirprogramming prowess. Technologies used: React, API, JavaScript, HTML, CSS`}
                            ghLink='https://github.com/sushantphalke/githublense-final'
                            demoLink='https://githublense.netlify.app/'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
