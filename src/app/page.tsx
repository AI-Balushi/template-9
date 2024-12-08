import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs/>
      <MenuSection />
      <Footer />
    </div>
  );
}
