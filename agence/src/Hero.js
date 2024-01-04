import { useState, useEffect } from "react";
import { FcIdea } from "react-icons/fc";



import {useSpring, animated} from 'react-spring';

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
    from: { y: -500 },
    to: { y: dropped ? 0 : -500 },
    config: { tension: 100, friction: 40 },
    onRest: () => {
      // Once the drop animation finishes, trigger color animation
      setShowColors(true);
    },
  });


  return (
    <div className="bg-gray-900 text-white pt-20 md:py-20 flex flex-col md:flex-row items-center">
      <div className="max-w-md mx-auto md:max-w-none md:w-1/2 md:order-2 md:ml-auto md:mr-0">
      <animated.div
        style={{
          ...dropAnimation,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FcIdea className={` w-20 md:w-32 lg:w-40 h-20 md:h-32 lg:h-40 ${
            showColors ? 'grayscale-0' :'grayscale-[50%]'
          }`} size={600} style={{ margin: "0 auto" }}  />
        </animated.div>
      </div>
      <div className="max-w-md mx-auto md:max-w-none md:w-1/2 md:order-1">
        <div className="p-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8">
            Donnez vie à vos idées avec des solutions technologiques innovantes
          </h1>
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
            Propulsez votre entreprise vers demain grâce à nos solutions évolutives et adaptées.
            Notre agence offre des solutions personnalisées adaptées à vos besoins spécifiques,
            offrant ainsi des réponses concrètes à vos défis numériques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
