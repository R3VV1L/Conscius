import { useState } from 'react';
import './menu.css';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu">
            <button
                className={`menu__icon ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span className="menu__icon-bar"></span>
                <span className="menu__icon-bar"></span>
                <span className="menu__icon-bar"></span>
            </button>
            <div className={`menu__items ${isOpen ? 'open' : ''}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
};
