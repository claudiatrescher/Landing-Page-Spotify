import React from "react";
import './Sidebar.css';
import logoSpotify from "../../assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBookOpen, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return(
        <div className="sidebar">
        <nav >
            <div className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="logo do spotify"/>
                    </a>
                </div>
                    
                        <ul>
                            <li>
                                <a href="">
                                    <span><FontAwesomeIcon icon={faHome} size="lg" /></span>
                                    <span>Início</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span><FontAwesomeIcon icon={faSearch} size="lg" /></span>
                                    <span>Buscar</span>
                                </a>
                            </li>
                        </ul>
                    
            </div>
        </nav>
        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <span><FontAwesomeIcon icon={faBookOpen} size="lg" /></span>
                    <span>Sua biblioteca</span>
                </button>
                <span><FontAwesomeIcon icon={faPlus} /></span>
            </div>

            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>

            <div className="cookies">
                <a href="">Termos Legais</a>
                <a href="">Privacidade</a>
                <a href="">Acessibilidade</a>
                <a href="">Cookies</a>
                
            </div>

            <div className="languages">
                <button className="languages__button">
                    <span><FontAwesomeIcon icon={faGlobe} size="lg" /></span>
                    <span>Português</span>
                </button>
            </div>
        </div>
    </div>

    )
};


export default Sidebar;