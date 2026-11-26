import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import ThreeBackground from "./components/ThreeBackground";
import "./App.css";

function Navbar() {
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useAppContext();

  return (
    <nav>
      <div className="logo">NEXA.</div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="hero">
      <ThreeBackground />
      <h1>Build Your <span>Digital Future</span></h1>
      <p>
        We create modern digital experiences with creative design,
        innovative technology and powerful solutions.
      </p>
      <NavLink to="/about" className="btn">Explore More</NavLink>
    </section>
  );
}

function About() {
  return (
    <section className="page about-page">
      <div className="about-content">
        <span className="section-tag">WHO WE ARE</span>

        <h1>
          We Build The <span>Future</span>
        </h1>

        <p>
          Nexa is a creative digital platform focused on modern
          web design, innovative technology and powerful digital
          experiences.
        </p>

        <div className="about-cards">
          <div className="info-card">
            <h2>01</h2>
            <h3>Creative Design</h3>
            <p>Beautiful and modern digital experiences.</p>
          </div>

          <div className="info-card">
            <h2>02</h2>
            <h3>Modern Technology</h3>
            <p>Smart solutions powered by modern technology.</p>
          </div>

          <div className="info-card">
            <h2>03</h2>
            <h3>Our Vision</h3>
            <p>Making the digital world better and smarter.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page contact-page">
      <span className="section-tag">GET IN TOUCH</span>

      <h1>Let's Create Something <span>Amazing</span></h1>

      <p>
        Have an idea or project in mind? Let's work together
        and turn your vision into reality.
      </p>

      <div className="contact-card">
        <h2>Let's Talk!</h2>

        <p>We would love to hear from you.</p>

        <a href="mailto:mdmamun606237@gmail.com" className="btn">
          Send Us an Email
        </a>
      </div>
    </section>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        © {new Date().getFullYear()} Nexa. All Rights Reserved.
      </footer>
    </BrowserRouter>
  );
}

export default App;