import React from 'react';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Nav-bar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';
class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    )
  }

}

export default App;
