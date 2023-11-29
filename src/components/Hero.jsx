import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ReactTyped from "react-typed";
import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";
import { lottie } from "../assets";

const Hero = () => {
  const [lotti, setLottie] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const lottieRef = useRef(null);
  //001f3f
  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lotti && lottieRef.current) {
      const animation = lotti.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: lottie,
      });

      return () => animation.destroy();
    }
  }, [lotti])

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[rgb(255,255,25)]'>
              Feizal Reza
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <ReactTyped 
              strings={["I develop user interfaces and", "web applications"]} 
              typeSpeed={170}
              loop
              cursorChar=";"
              showCursor={true}
              />
          </p>
        </div>
      </div>

      <div className={
        isMobile ? "absolute m-auto left-0 right-0 bottom-20 w-8/12" : "absolute right-0 bottom-0 w-5/12"
      } ref={lottieRef}></div>

      <div className='absolute xs:bottom-5 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-1 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;