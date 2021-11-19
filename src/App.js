import "./App.css"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Roadmap from "./components/Roadmap/Roadmap"
import Tokenomics from "./components/Tokenomics/Tokenomics"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Tokenomics id="tokenomics" />
      <Roadmap id="roadmap" />
    </div>
  )
}

export default App
