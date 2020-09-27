import React from 'react';

import './styles.css';

import usImg from '../../assets/us.jpg'

export default function Home() {
    return (
        <div className="home-container">
            <section className="home">
                <h1>Our Wedding is close</h1>
            </section>

            <img src={usImg} alt="Us" width="500" />
        </div>
    );
}