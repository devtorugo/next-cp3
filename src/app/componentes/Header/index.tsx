import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <header className="customizacao-header">
            <img
                src="\log-cnn-brasil-transparent.svg"
                alt="Logo"
                className="logo"
                width="100px"
                height="50px"
            />
            <h1>os melhores filmes estão aqui!</h1>
        </header>
    );
};

export default Header;

