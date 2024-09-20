import Navbar from "@/component/navbar";
import Hero from "@/component/hero";
import Footer from "@/component/footer";
import Portfolio from "@/portfolio/page";

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar Section */}
      <header className="navbar-section">
        <Navbar />
      </header>

      {/* Body Section */}
      <section className="body-section">
        <h1 className="greeting">As-Salaamu Alaykum</h1>
        <Hero />
        <Portfolio />
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <Footer />
      </footer>
    </div>
  );
}

