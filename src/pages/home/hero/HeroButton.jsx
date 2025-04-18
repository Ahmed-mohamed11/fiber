import { useEffect } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const HeroButton = () => {
    useEffect(() => {
        gsap.from(".hero-button",
            {
                opacity: 0,
                y: 10,
                duration: 1,
                delay: 2.5,
                ease: "power3.out"
            });
        gsap.to(".hero-button", {
            rotate: 360,
            opacity: 1,
            duration: 1,
            ease: "power3.inOut",
            repeat: 2,
            delay: 2,
        });
    }, []);

    return (
        <button
            className="hero-button text-left flex items-center justify-start z-50 gap-2 bg-sky-500 text-white rounded-full py-3 px-6 font-bold hover:bg-sky-600 transition duration-300 shadow-lg">
            Get started free <ArrowRight />
        </button>
    );
};

export default HeroButton;
