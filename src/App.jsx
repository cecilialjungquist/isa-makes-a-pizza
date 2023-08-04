import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h2>sometexthere</h2>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h4>made with love - 2023</h4>
      </footer>
    </>
  )
}

export default App;
