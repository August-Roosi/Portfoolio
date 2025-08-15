import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useNavigationStore } from './navigationStore.js';
import './App.css'

// Pages
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import AboutMe from './pages/AboutMe.js';
import Error from './pages/Error.js';

// Components
import Waves from './components/waves.jsx';
import Dock from './components/dock.jsx';
import PageWrapper from './components/PageWrapper.js';

// Icons
import { BiHomeAlt } from 'react-icons/bi';
import { BiSolidContact } from 'react-icons/bi';
import { BsPersonWalking } from 'react-icons/bs';
import { AnimatePresence } from 'motion/react';


function App() {
  const location = useLocation();
  const navigate = useNavigate(); 

  const setDirection = useNavigationStore((state) => state.setDirection);
  const setTo = useNavigationStore((state) => state.setTo);
  const setFrom = useNavigationStore((state) => state.setFrom);
  const isNavigating = useNavigationStore((state) => state.isNavigating);

  function calculateDirectionFrom(from: string, to: string) {
    const pageOrder = ["/", "/about-me", "/contact"];
    const fromIndex = pageOrder.indexOf(from);
    const toIndex = pageOrder.indexOf(to);
    let direction = 0;

    if (toIndex > fromIndex) direction = 1;  // forward
    if (toIndex < fromIndex) direction = -1; // backward

    console.log(direction)
    setDirection(direction);
    return direction;
  }

  function navigateWrapper(to: string) {
    if (isNavigating) return; 
    setTo(to);
    setFrom(location.pathname);
    calculateDirectionFrom(location.pathname, to);
    navigate(to)
  }
  

      const items = [
  { icon: <BiHomeAlt size={18}  className='text-gray-100'/>, 
    label: "Kodu", pathname: "/",
    onClick: () => navigateWrapper('/')
  },

  { icon: <BsPersonWalking size={18}  className='text-gray-100'/>, 
    label: "Minust", pathname: "/about-me",
    onClick: () =>  navigateWrapper('/about-me')
  },

  { icon: <BiSolidContact size={18}  className='text-gray-100'/>, 
    label: "Kontakt", pathname: "/contact",
    onClick: () => navigateWrapper('/contact')
  },

  ];


  return (
    <>
    <div className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route path="/" element={<PageWrapper> <Home /> </PageWrapper>} />
          <Route path="/about-me" element={<PageWrapper><AboutMe /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper> <Contact /> </PageWrapper>} />

          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </div>


        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className='z-[120] fixed'
        />

        <Waves
        lineColor="rgba(119, 66, 66, 1)"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.002}
        waveSpeedY={-0.05}
        waveAmpX={34}
        waveAmpY={20}
        friction={0.9}
        tension={0.03}
        maxCursorMove={120}
        xGap={32}
        yGap={50}
        className='z-50'
        />
    </>
  )
}

export default App
