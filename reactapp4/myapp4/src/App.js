import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import Footers from './components/Footers';
import Footer from './components/Footer';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import Team from './components/Team';
import Service from './components/Service';
import About from './components/About';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* Navbar Start */}
      <Navbar/>
      {/* Navbar End */}
      {/* Carousel Start */}
      <Carousel/>
      {/* Carousel End */}
      {/* About Start */}
      <About/>
      {/* About End */}
      {/* Service Start */}
      <Service/>
      {/* Service End */}
      {/* Team Start */}
      <Team/>
      {/* Team End */}
      {/* FAQs Start */}
      <FAQs/>
      {/* FAQs End */}
      {/* Contact Start */}
      <Contact/>
      {/* Contact End */}
      {/* Footer Start */}
      <Footer/>
      <Footers/>
      {/* Footer End */}
      {/* Modal */}
      <Modal/>
      {/* Modal */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up" />
      </a>
    </>

  );
}

export default App;
