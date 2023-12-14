import { FaHeadphones, FaSearch, FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <div className="py-20 bg-gray-900 " >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-5 gap-20 max-w-5xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-white p-4">
              <FaHeadphones size={100} />
            </div>
            <p className="text-center text-white">Écoute attentive pour cerner les besoins spécifiques.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-white p-4" style={{ transform: 'translateY(5px)' }}>
              <FaSearch size={100} />
            </div>
            <p className="text-center text-white" >Examen minutieux de la situation, concurrents, opportunités.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-white p-4" style={{ transform: 'translateY(20px)' }}>
              <FaLightbulb size={100} />
            </div>
            <p className="text-center text-white">Développement stratégique adapté à vos besoins et marché.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-white p-4" style={{ transform: 'translateY(25px)' }}>
              <FaCogs size={100} />
            </div>
            <p className="text-center text-white">Mise en œuvre précise des solutions convenues.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-white p-4" style={{ transform: 'translateY(40px)' }}>
              <FaChartLine size={100} />
            </div>
            <p className="text-center text-white">Analyse, ajustement pour une croissance constante et efficace.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
