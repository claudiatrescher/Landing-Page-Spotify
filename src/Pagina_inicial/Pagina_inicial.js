import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Playlist from './Playlist/Playlist';


const Pagina_inicial = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Playlist />
      <Footer />
    </div>
  );
};

export default Pagina_inicial;