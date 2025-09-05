import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Top_Selling from './Components/Top_Selling/Top_Selling';
import Discount from './Components/Discount/Discount';
import Signature from './Components/Signature/Signature';
import Experience from './Components/Experience/Experience';
import Community from './Components/Community/Community';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Top_Selling />
      <Discount />
      <Signature />
      <Experience />
      <Community />
      <About />
    </div>
  );
}

export default App;
