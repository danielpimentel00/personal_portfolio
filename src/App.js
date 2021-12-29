import "./App.css";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Introduction onProjectsClick={"#projects-container"} />
      <Projects />
    </div>
  );
}

export default App;
