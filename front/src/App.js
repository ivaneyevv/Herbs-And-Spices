import Header from './components/Header.jsx';
import './scss/style.scss';
import './scss/reset.scss';  
import './scss/signup.scss';
import './scss/login.scss';
import './scss/about.scss';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
