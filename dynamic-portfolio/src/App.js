import '../public/assets/style.css';
import Navbar from './components/Navbar.js';
import Container from './components/Container.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <>
    <header>
      <Navbar address="page-url" />
    </header>
    <Container />
    <Footer/>
    </>
  );
}