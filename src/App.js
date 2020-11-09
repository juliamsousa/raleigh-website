import React from 'react';

// importacao dos componentes da pagina 
import Header from './components/header/Header'
import About from './components/about/About'
import Content from './components/content/Content'
import Products from './components/products/Products'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <About />
     <Content />
     <Products />
     <Gallery />
     <Contact />
     <Footer/>
    </div>
  );
}

export default App;
