import React from 'react';

import './styles.css';

import usImg from '../../assets/us.jpg'

export default function Side() {
    return (
        <div className="side-container">
            <img src={usImg} alt="Us" width="500" />
        </div>
    );
}