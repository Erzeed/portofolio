import { useState, useEffect, useRef } from "react";
import { loading } from "../assets"
import ReactTyped from "react-typed";

const Pageloader = () => {
    const [lotti, setLottie] = useState();
    const lottieRef = useRef(null);

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
            animationData: loading
          });
    
          return () => animation.destroy();
        }
      }, [lotti])
    
    return(
        <div className="h-screen flex flex-col items-center justify-center bg-[#001f3f]">
            <div className="w-40 h-40" ref={lottieRef}></div>
            <p className="mt-2 text-slate-400 antialiased text-lg tracking-wide">
                please wait
                <ReactTyped 
                strings={["..."]} 
                typeSpeed={300}
                cursorChar="."
                showCursor={true}
                />
            </p>
        </div>
    )
}

export default Pageloader;