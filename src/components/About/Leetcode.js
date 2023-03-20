import React from 'react';

import { Row } from 'react-bootstrap';

function LeetCode() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <h1 className='project-heading' style={{ paddingBottom: '20px' }}>
                How's My <strong className='purple'>Code</strong>
            </h1>
            <img
                src='https://leetcard.jacoblin.cool/sushantphalke?ext=heatmap'
               style={{width:'68%'}}
                fontSize={16}
                alt='leetcode sushantphalke'
            />
        </Row>
    );
}

export default LeetCode;
