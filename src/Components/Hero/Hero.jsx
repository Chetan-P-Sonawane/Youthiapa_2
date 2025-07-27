import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videosrc from "../../assets/video/yothiapa_compressed.mp4";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 0.75;
        // Responsive ScrollTrigger end value
        const endValue = window.innerWidth < 640 ? "+=500" : "+=1000";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: endValue,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                pinSpacing: true,
            },
        });

        tl.to(
            titleRef.current,
            {
                height: "100vh",
                ease: "power2.out",
            }
        );

        return () => {
            tl.scrollTrigger?.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen overflow-hidden">
            {/* Video Section */}
            <div className="h-screen w-full relative">
                <video
                    poster="https://youthiapa.com/cdn/shop/files/preview_images/a6fb5e33f9a64302ab7ce3bbf3efa3fb.thumbnail.0000000000.jpg?v=1750014275&width=1920"
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center"
                >
                    <source src={videosrc} type="video/mp4" />
                </video>
            </div>

            {/* Title Mask */}
            <div
                ref={titleRef}
                className="nametitle absolute top-0 left-0 w-full bg-black text-white z-20 flex items-center justify-center overflow-hidden"
            >
                <h1 className="text-[18vw]  lg:text-[10vw]">
                    Youthiapa
                </h1>
            </div>
        </div>
    );
};

export default Hero;