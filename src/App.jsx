import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

function App() {
  let pathname = useParams();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
