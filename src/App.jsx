import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <header>
        <h2 className='italic small'><Link className='home-link' to='/'>- isamakesapizza -</Link></h2>
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
