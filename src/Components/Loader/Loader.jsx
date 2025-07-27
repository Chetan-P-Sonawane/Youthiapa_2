import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Mag from "../MagnetEffect/Mag";
import Counter from "./Counter";

const Loader = () => {
    const loaderRef = useRef(null);
    const loadercontainerRef = useRef(null);
    const textRef = useRef(null);
    const byRef = useRef(null);
    const founderRef = useRef(null);
    const [currentPhrase, setCurrentPhrase] = useState(0);

    // Loader text phrases
    const phrases = [
        "Rooted in Respect",
        "Built on Resilience",
        "Styled with Purpose",
        "Raised Right",
    ];

    useEffect(() => {
        // Create a GSAP timeline
        const tl = gsap.timeline({ repeat: 0 }); // Run once

        // Animate each phrase
        phrases.forEach((_, index) => {
            tl.to(textRef.current, {
                opacity: 1,
                duration: 0.3,
                onStart: () => {
                    setCurrentPhrase(index); // Update phrase index
                },
            }).to(textRef.current, {
                opacity: 0,
                duration: 0.3,
                delay: index === phrases.length - 1 ? 0.3 : 0.3,
            });
        });

        // Animate loader moving up after last phrase is visible
        tl.to(loaderRef.current, {
            y: "-50%",
            duration: 1.5,
            ease: "power4.inOut",
        }, "-=1.0");
        
        tl.to(byRef.current,{
          y: "-100%",
          ease: "power4.inOut",
          opacity:0,
        }, "-=0.8");

        tl.to(founderRef.current, {
          y: "-100%",
          ease: "power4.inOut",
          opacity: 0,
        }, "-=0.6");

        tl.to(loadercontainerRef.current, {
            y: "-100%",
            duration: 1.5,
            ease: "power4.inOut",
        }, "-=0.8");
        

        // Cleanup
        return () => {
            tl.kill(); // Kill the timeline to prevent memory leaks
        };
    }, [phrases.length]);

    return (
        <div
            ref={loadercontainerRef}
            className="fixed top-0 left-0 py-6 px-6 pb-20 lg:p-10 w-full h-screen flex flex-col justify-between text-white z-[10] pointer-events-none"
            style={{ background: "black" }}
        >
            <div ref={loaderRef} className="relative  h-[50%] flex flex-col items-center justify-end">
                <div className="absolute right-0 top-0 text-[10vw] xs:text-[8vw] sm:text-[6vw] md:text-[5vw] leading-none font-bold tracking-wider">
                    <Counter
                        from={0}
                        to={100}
                        separator=","
                        direction="up"
                        duration={0.5}
                        className="count-up-text"
                    />
            </div>
                <h1
                    ref={textRef}
                    className=" text-[6.5vw] font-normal lg:text-[5vw] 2xl:text-[5vw] tracking-wider uppercase"
                    style={{ opacity: 0 }}
                >
                    <Mag>
                       {phrases[currentPhrase]}
                    </Mag>
                </h1>
            </div>

            <div ref={byRef} className=" h-[30%]  flex items-center justify-center">
                <h5 className="text-[3vw] xs:text-[2.3vw] amd:text-[1.2vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1vw] 2xl:text-[0.8vw] italic">By</h5>
            </div>

            <div ref={founderRef} className="flex flex-col md:flex-row items-center md:justify-between text-white">
                {["Arvin Bhandari", "Bhuvan Bam", "Mohit Kadra"].map((item, index) => (
                    <Mag key={index}>
                        <h5 className="text-[3vw] xs:text-[2.3vw] amd:text-[1.2vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1.05vw] 2xl:text-[0.8vw]  uppercase" >
                            {item}
                        </h5>
                    </Mag>
                ))}
            </div>
        </div>
    );
};

export default Loader;