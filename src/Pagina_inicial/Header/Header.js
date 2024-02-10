import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';


const Header = () => {
    
    return (
        <nav className="header__navigation">
        <div className="navigation">
            <button className="arrow-left">
                <img src={smallLeft} alt="Seta a esquerda"/>
            </button>
            <button className="arrow-right">
                <img src={smallRight} alt="Seta a direita"/>
            </button>
        </div>    

            <div className="header__search">
                <img src={search} alt=""/>
                <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?"/> 
                
            </div>

            <div className="header__login">
                <Link to="/Pagina_registro" className="subscribe">Inscrever-se</Link>
                <button className="login">Entrar</button>
            </div>
    </nav>
    )
};

export default Header;



 <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?"/> 