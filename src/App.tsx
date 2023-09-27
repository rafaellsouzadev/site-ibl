import './App.scss';
import { Logo } from './components/logo';
import { BsWhatsapp } from 'react-icons/bs';
import { ArrowIcon } from './components/arrow-icon';

function App() {

  return (
    <main>
      <header className='header-container'>
        <Logo />
        <nav className="menu-options">
          <a className='options' href="#">Início</a>
          <a className='options' href="#">Planos</a>
          <a className='options' href="#">Contatos</a>
        </nav>

        <div className='menu-link'>
          <a className='menu-whats' href="#">
            ASSINE PELO WHATSAPP <BsWhatsapp />
          </a>
          <button>
            <div className='btn-face-white'>
              APP CLIENTE
              <ArrowIcon />
            </div>
            <div className='btn-face-purple'>
              APP CLIENTE
              <ArrowIcon />
            </div>
          </button>
        </div>
      </header>
    </main>
  )
}

export default App
