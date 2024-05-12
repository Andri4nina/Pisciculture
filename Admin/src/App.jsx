
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Experience from './components3D/Experience'
import { Canvas } from '@react-three/fiber';
import Login from './pages/Login';
import Index from './pages/Index';
import { useEffect, useState } from 'react';
function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    const javaToken = localStorage.getItem('JavaToken');
    if (javaToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(true);
    }
  }, []);
  return (
    <>
      <div className='-z-10 fixed max-h-screen h-screen w-full top-0 left-0'>
        <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }} >
          <Experience />
        </Canvas>
      </div>
      <div className='z-10 w-full h-full min-h-screen allcontent'>
      <Router>
            <Routes>
                {/* Redirection vers la page de connexion si l'utilisateur n'est pas connecté */}
                <Route path="/" element={loggedIn ? <Navigate to="/AdminCores" /> : <Navigate to="/login" />} />
                
                {/* Définition de vos autres routes */}
                <Route path="/AdminCores/*" element={<Index />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>

      </div>

    </>
  )
}

export default App
