import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Home from './pages/Home';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-festival-darker">
      <Navbar />
      <HeroCarousel />
      <Home />
      <EventsSection />
      <Footer />
    </div>
  );
}

export default App;
