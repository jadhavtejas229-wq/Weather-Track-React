import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <section className="card">
        <p className="eyebrow">React starter</p>
        <h1>Hello, world!</h1>
        <p className="description">
          Your React app is running. Click the button to try it out.
        </p>

        <button onClick={() => setCount((current) => current + 1)}>
          Count: {count}
        </button>
      </section>
    </main>
  );
}

export default App;