import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Pageloader } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3600);
  }, []);
  return (
    <BrowserRouter>
      {isLoading ? (<Pageloader />
      ) :(
        <>
          <Cursor isGelly={true} cursorSize={20} cursorBackgrounColor="#fff" />
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </>
        )}
    </BrowserRouter>
  );
}

export default App;