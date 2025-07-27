import { useEffect, useRef } from "react";
import "./Story.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Story = () => {

    let story = [
        "We started as friends, just a couple of curious minds with a love for creativity, storytelling, and building things from the ground up. In our early twenties, that passion took shape as Youthiapa—a merchandise brand that grew hand-in-hand with Bhuvan’s journey on YouTube. As his content began connecting with millions, Youthiapa became more than just merch. It became a symbol of community, relatability, and youthful energy.",
        "But like all things, we evolved.",
        "Over time, we began to feel a deeper pull towards something more intentional. We didn’t just want to chase trends; we wanted to stand for something. We wanted to create a brand that looked good and felt right. One that had purpose stitched into every piece.",
        "That search brought us home to the values we grew up with. And that’s how Raised Right came to life.",
        "Raised Right is a celebration of being grounded yet bold, expressive yet effortless. It’s about wearing your values, feeling confident in your skin, and staying true to who you are.",
        "Because at the end of the day, it’s not just about what you wear—it’s about what you stand for."
    ]

    const storytitleRef = useRef(null);
    const subtitleRef = useRef(null);
    const paragraphRefs = useRef([]);

    // Add refs to paragraphRefs array
    const addToRefs = (el) => {
        if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);
        }
    };

    useEffect(() => {
        // Reset title and subtitle states
        gsap.set(storytitleRef.current, { clearProps: "all" });
        gsap.set(subtitleRef.current, { clearProps: "all" });

        const tl = gsap.timeline({ repeat: 0 });

        // Animate both titles
        tl.from(storytitleRef.current, {
            y: 200,
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
        }).from(subtitleRef.current, {
            y: 200,
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
        }, "-=0.5");

        // Parallax effect with random directions
        paragraphRefs.current.forEach((para, index) => {
            // Define random directions for entry and exit
            const directions = [
                { x: "-120%", y: "0" },
                { x: "100%", y: "0%" },
                { x: "80%", y: "0%" },
                { x: "-150%", y: "0%" },
                { x: "80%", y: "0%" },
                { x: "-100%", y: "0%" },
            ];
            const direction = directions[index % directions.length]; // Cycle through directions

            gsap.fromTo(
                para,
                { x: direction.x, y: direction.y }, // Start from random direction
                {
                    x: 0,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: para.parentElement,
                        start: "top 80%",
                        end: "top 0%",
                        scrub: true,
                        markers: false,
                    },
                }
            );
        });

        return () => {
            tl.kill(); // Clean up title animation
            ScrollTrigger.getAll().forEach((st) => st.kill()); // Clean up ScrollTriggers
        };
    }, []);

    let storylines = story.map((item,index) => {
       return ( 
            <div key={index} className="para-container h-[100vh] flex items-center justify-center ">
                 <p className={`text-[5vw] leading-[5.4vw] lg:text-[3vw] lg:leading-[3.5vw] text-center px-[5vw] md:px-[10vw] `} ref={addToRefs}>
                   {item}
                 </p>
            </div>
        )
    }) 

    return (
        <div className="story px-6 lg:px-16 bg-amber-200">
            <div className="h-[80vh] flex flex-col  items-center justify-center w-full">
                <h3 className="text-center text-[12vw] xs:text-[10vw] sm:text-[8vw] lg:text-[6vw] overflow-hidden">
                    <span className="inline-block " ref={storytitleRef}>
                        Our Journey
                    </span>
                </h3>
                <h5 className="text-[3.8vw] xs:text-[3vw] sm:text-[2.5vw] lg:text-[1.8vw] text-center overflow-hidden">
                    <span className="inline-block " ref={subtitleRef}>
                        From Friends to Founders
                    </span>
                </h5>
            </div>

            {   storylines   }

        </div>
    );
};

export default Story;