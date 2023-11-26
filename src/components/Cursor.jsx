import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

const Customcursor = () => {
    const [mouseOver, setMouseOver] = useState({
        x: null,
        y: null
    })


    const updateMousePosition = e => {
        setMouseOver({
            x: e.pageX,
            y: e.pageY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('scroll', updateMousePosition); // Add scroll event
        return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('scroll', updateMousePosition);
        };
    }, [])

    const variants = {
        default: {
            x: mouseOver.x - 16,
            y: mouseOver.y - 16
        }
    }

    return (
        // <motion.div  
        //     className="w-5 h-5 rounded-full bg-slate-400 absolute top-0 left-0"
        //     style={{
        //         translateX: variants.default.x,
        //         translateY: variants.default.y
        //     }}
        // />
        <>
            <Cursor isGelly={true} cursorSize={25} cursorBackgrounColor="#fff" />
        </>
    )
}

export default Customcursor;