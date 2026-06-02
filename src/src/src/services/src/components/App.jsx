import React from 'react';
import Header from './src/components/Header';
import Nav from './src/components/Nav';
import ListaProyectos from './src/components/ListaProyectos';
import Footer from './src/components/Footer';
import './src/css/estilos.css'; // Asegúrate de arrastrar tus estilos aquí

function App() {
  return (
    <div className="layout-container">
      <Header />
      <Nav />
      <main>
        <ListaProyectos />
      </main>
      <Footer />
    </div>
  );
}

export default App;