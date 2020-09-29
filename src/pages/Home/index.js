import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Side from './../Side';

export default function Home() {
    return (
        <div className="main-container">
            <section className="home">
                <form>
                    <h1>Nosso casamento está perto...</h1>

                    <Link className="link" to="/nos">Nossa história</Link>
                    <Link className="link" to="/nos">A cerimônia</Link>
                    <Link className="link" to="/nos">Lista de presentes</Link>
                    <Link className="link" to="/nos">Confirme sua presença</Link>
                    <Link className="link" to="/nos">Deixe um recado</Link>
                </form>
            </section>

            <Side />
        </div>
    );
}