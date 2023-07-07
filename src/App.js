import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Container from './Components/Container/Container';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <AboutMe />
    </Container>
    </>
  );
}

export default App;
