import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Container from './Components/Container/Container';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <AboutMe />
      <Projects />
    </Container>
    </>
  );
}

export default App;
