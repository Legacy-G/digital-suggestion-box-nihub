import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useMediaQuery from './hooks/useMediaQuery';
// import Loading from './shared/Loading'
import Navbar from './components/Navbar'
import Home from './pages/home';
import { Toaster } from 'react-hot-toast';


const App = () => {
  
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [ selectedPage, setSelectedPage ] = useState('home')
  const [ user, setUser ] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
      joined: new Date(),
  });
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);      
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, [])
  

  return (
    <div className=' w-full bg-slate-50 '>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" 
            element={
              <div className="h-full bg-transparent ">
                <Navbar isTopOfPage={isTopOfPage} />
                <Home />
                  <Toaster position="top-right" />
              </div>   
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}


export default App