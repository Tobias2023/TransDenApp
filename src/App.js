import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Features from './components/Features';
import About from './components/About'

//TODO: Look into SPA React router to route (Features, Showcase, about) to area on page
//TODO: Fix mobile app view

function App() {
  return (
    <div> 
      <Header />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
