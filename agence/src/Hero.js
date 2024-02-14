import { useState, useEffect } from "react";
import { FcCommandLine } from "react-icons/fc";
import { useSpring, animated } from "react-spring";

const Hero = () => {
  const [dropped, setDropped] = useState(false);
  const [showColors, setShowColors] = useState(false);

  useEffect(() => {
    const dropTimer = setTimeout(() => {
      setDropped(true);
    }, 1000);

    return () => clearTimeout(dropTimer);
  }, []);

  const dropAnimation = useSpring({
    from: { y: -500, rotate: -360 },
    to: { y: dropped ? 0 : -500, rotate: -9 },
    config: { tension: 100, friction: 5 },
    onRest: () => {
      // Once the drop animation finishes, trigger color animation

      setShowColors(true);
    },
  });

  return (
    <div className="bg-[#2C3333] text-white pt-20 md:py-25 flex flex-col md:flex-row items-center">
      <div className="max-w-md mx-auto md:max-w-none md:w-1/2 lg:w-full md:order-2 md:ml-auto md:mr-0">
        <animated.div
          style={{
            ...dropAnimation,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FcCommandLine
            className={`w-[200px] h-[300px] md:w-[400px] md:h-[600px] animation:transform  hover:rotate-[-360deg] transition-transform origin-center duration-1000  hover:fill-current  ${
              showColors ? "grayscale-0" : "grayscale-[70%]"
            }`}
            // style={{
            //   width: '300px',
            //   height: '500px',
            // }}
          />
          Le code, on connait!{" "}
        </animated.div>
      </div>

      <div className="max-w-md mx-auto md:max-w-none md:w-1/2 md:order-1 text-[#E7F6F2]">
        <div className="p-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8">
            Pour chaque défi, nous avons une solutions technologique.
          </h1>
          {/* <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
        Propulsez votre entreprise vers demain grâce à nos solutions évolutives et adaptées.
        Notre agence offre des solutions personnalisées adaptées à vos besoins spécifiques,
        offrant ainsi des réponses concrètes à vos défis numériques.
      </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
