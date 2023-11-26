import { BrowserRouter } from "react-router-dom";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
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
        {/* <Customcursor /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;