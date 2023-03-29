import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Projeto React</h1>
      {isVisible ? (
        <>
          <strong style={{ fontSize: "32px" }}>{count}</strong>
          <div>
            <button onClick={handlePlus}>Increase</button>
            <button onClick={handleMinus}>Decrease</button>
          </div>
        </>
      ) : (
        <div>
          <h3>Não esta visivel</h3>
        </div>
      )}

      <button onClick={() => setIsVisible(!isVisible)}>Visible</button>
    </div>
  );
}

export default App;
