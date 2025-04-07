// src/componets/Greeting.jsx
import React from "react";

const Greeting = () => {
    return (
        <div>
        <h2>Hello from the Greeting Componet!</h2>
        <p>This is your first custom componet in React.</p>
        </div>
    );
};

export default Greeting;
// This code defines a simple React functional component named "Greeting".

// src/App.jsx
import React from "react";
import './App.css';
import Greeting from "./components/Greeting";

function App() {
    return (
        <div className="App">
            <h1>Vite + React</h1>
            <Greeting />
        </div>
    );
}

export default App;
// This is the main App component that imports and uses the Greeting component.