// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-lg py-4">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center">Generador de Usuarios Aleatorios</h1>
                <p className="text-center mt-2">Usando la API de Random User</p>
            </div>
        </header>
    );
};

export default Header;