// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/ODS-13.webp'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         {/* <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a> */}
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Routes from './Routes';

// function App() {
//   return (
//     <Router>
//       <Routes />
//     </Router>
//   )
// }

// export default App;

import React, { useState } from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import OdsDescription from './components/OdsDescription';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutMe />;
      case 'ods':
        return <OdsDescription />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <div className='navbar'>
        <div className="button-container">
          <button className='botao' onClick={() => setCurrentPage('home')}>Home</button>
          <button className='botao' onClick={() => setCurrentPage('about')}>Sobre Mim</button>
          <button className='botao' onClick={() => setCurrentPage('ods')}>Descrição ODS</button>
        </div>
      </div>

      <div className="page-content">  
        {renderPage()}
      </div>
      <footer>
        &#9400; SOS Abrigo
      </footer>
    </div>
  );
};

export default App;


