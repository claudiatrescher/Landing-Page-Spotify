import React from "react";
import './HeaderRegistro.css';
import logoBrancaSpotify from '../../assets/icons/Spotify_Logo_RGB_White.png';



const HeaderRegistro = () => {
    return(
        <nav className="header">
        <div>
            <img src={logoBrancaSpotify} alt="Logo branca Spotify"/>
        </div>
    </nav>
    )
};


export default HeaderRegistro;