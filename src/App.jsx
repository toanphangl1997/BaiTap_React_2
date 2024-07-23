import { useState } from "react";
import Header from "./components/Header";
import StateGlass from "./components/StateGlass";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-image">
        <Header />
        <StateGlass />
      </div>
    </>
  );
}

export default App;
