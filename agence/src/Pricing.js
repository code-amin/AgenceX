const Pricing = ({ onSelectPlan, plan }) => {
  const handlePlan = (price) => {
    onSelectPlan(price);
  };

  const basic = {
    name: "Basic",
    price: "29$",
    pages: "5 pages",
    support: "Basic Support",
    features: "Limited Features",
    fr: "Plan de base - 29$",
  };
  const standard = {
    name: "Standard",
    price: "59$",
    pages: "10 pages",
    support: "Standard Support",
    features: "More Features",
    fr: "Plan Standard - 59$",
  };
  const premium = {
    name: "Premium",
    price: "99$",
    pages: "Unlimited pages",
    support: "Priority Support",
    features: "Advanced Features",
    fr: "Plan Premium - 99$",
  };
  return (
    <div id="pricing" className="bg-gray-900 py-8 pt-24">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Tarification
      </h2>
      <div className="text-black flex flex-col md:flex-row justify-center mx-4">
        {/* Package 1 */}
        <div
          className={`bg-white shadow-md rounded-lg w-full md:w-1/3 md:mx-4 mb-4 ${
            plan === basic.fr
              ? "outline outline-offset-4 outline-yellow-400 "
              : "outline-none"
          }`}
          onClick={() => {
            handlePlan(basic.fr);
          }}
        >
          <div className="py-6 px-4 hover:cursor-pointer text-center" >
            <h3 className="text-lg font-semibold text-center mb-4">{basic.name}</h3>
            <p className="text-2xl font-bold text-center mb-4">{basic.price}</p>
            <ul className="text-sm">
              <li className="mb-2">{basic.pages}</li>
              <li className="mb-2">{basic.support}</li>
              <li className="mb-2">{basic.features}</li>
            </ul>
            <button className="block mx-auto bg-yellow-500 text-white py-2 px-4 mt-6 rounded-md hover:bg-yellow-400">
              Get Started
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div
          className={`bg-white shadow-md rounded-lg w-full md:w-1/3 md:mx-4 mb-4 ${
            plan === standard.fr
              ? "outline outline-offset-4 outline-yellow-400 "
              : "outline-none"
          }`}
          onClick={() => {
            handlePlan(standard.fr);
          }}
        >
          <div className="py-6 px-4 hover:cursor-pointer text-center" >
            <h3 className="text-lg font-semibold text-center mb-4">{standard.name}</h3>
            <p className="text-2xl font-bold text-center mb-4">{standard.price}</p>
            <ul className="text-sm">
              <li className="mb-2">{standard.pages}</li>
              <li className="mb-2">{standard.support}</li>
              <li className="mb-2">{standard.features}</li>
            </ul>
            <button className="block mx-auto bg-yellow-500 text-white py-2 px-4 mt-6 rounded-md hover:bg-yellow-400">
              Get Started
            </button>
          </div>
        </div>

        {/* Package 3 */}
        <div
          className={`bg-white shadow-md rounded-lg w-full md:w-1/3 md:mx-4 mb-4 ${
            plan === premium.fr
              ? "outline outline-offset-4 outline-yellow-400 "
              : "outline-none"
          }`}
          onClick={() => {
            handlePlan(premium.fr);
          }}
        >
          <div className="py-6 px-4 hover:cursor-pointer text-center" >
            <h3 className="text-lg font-semibold text-center mb-4">{premium.name}</h3>
            <p className="text-2xl font-bold text-center mb-4">{premium.price}</p>
            <ul className="text-sm">
              <li className="mb-2">{premium.pages}</li>
              <li className="mb-2">{premium.support}</li>
              <li className="mb-2">{premium.features}</li>
            </ul>
            <button className="block mx-auto bg-yellow-500 text-white py-2 px-4 mt-6 rounded-md hover:bg-yellow-400">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
