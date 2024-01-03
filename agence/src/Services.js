import { FaHeadphones, FaSearch, FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="py-10 bg-gray-900 pt-24">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="icon-container">
            <FaHeadphones size={80} className="icon text-white border border-white rounded-full p-3" />
          </div>
          <p className="text-center text-white">Écoute attentive pour cerner les besoins spécifiques.</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="icon-container">
            <FaSearch size={80} className="icon text-white border border-white rounded-full p-3" />
          </div>
          <p className="text-center text-white">Examen minutieux de la situation, concurrents, opportunités.</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="icon-container">
            <FaLightbulb size={80} className="icon text-white border border-white rounded-full p-3" />
          </div>
          <p className="text-center text-white">Développement stratégique adapté à vos besoins et marché.</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="icon-container">
            <FaCogs size={80} className="icon text-white border border-white rounded-full p-3" />
          </div>
          <p className="text-center text-white">Mise en œuvre précise des solutions convenues.</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="icon-container">
            <FaChartLine size={80} className="icon text-white border border-white rounded-full p-3" />
          </div>
          <p className="text-center text-white">Analyse, ajustement pour une croissance constante et efficace.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
