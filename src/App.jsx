import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import "./App.css";
import Examples from "./components/Examples";
``;
function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center pb-20"
      style={{ background: "radial-gradient(#280a48, #20043d)" }}
    >
      <Header />
      <CoreConcept />
      <Examples />
    </div>
  );
}

export default App;
