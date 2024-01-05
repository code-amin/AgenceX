const Pricing = ({ onSelectPlan, plan }) => {
  const handlePlan = (price) => {
    onSelectPlan(price);
  };

  const basic = {
    // name: "Basic",
    // price: "29$",
    // pages: "5",
    // support: "Basic Support",
    // features: "Limited Features",
    fr: "Plan de base - 29$",
  };
  const standard = {
    // name: "Standard",
    // price: "59$",
    // pages: "10",
    // support: "Standard Support",
    // features: "More Features",
    fr: "Plan Standard - 59$",
  };
  const premium = {
    // name: "Premium",
    // price: "99$",
    // pages: "Unlimited",
    // support: "Priority Support",
    // features: "Advanced Features",
    fr: "Plan Premium - 99$",
  };
  return (
    <div id="pricing" className="bg-gray-900 py-8 pt-24">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Our Pricing
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
          <div className="py-6 px-4 hover:cursor-pointer">
            <h3 className="text-lg font-semibold text-center mb-4">Basic</h3>
            <p className="text-2xl font-bold text-center mb-4">$29</p>
            <ul className="text-sm">
              <li className="mb-2">5 Pages Website</li>
              <li className="mb-2">Basic Support</li>
              <li className="mb-2">Limited Features</li>
            </ul>
            <button className="block mx-auto bg-yellow-500 text-white py-2 px-4 mt-6 rounded-md hover:bg-yellow-400">
              Get Started
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div
          className={`bg-white shadow-md rounded-lg w-full md:w-1/3 md:mx-4 mb-4 hover:cursor-pointer ${
            plan === standard.fr
              ? "outline outline-offset-4 outline-yellow-400 "
              : "outline-none"
          }`}
          onClick={() => {
            handlePlan(standard.fr);
          }}
        >
          <div className="py-6 px-4">
            <h3 className="text-lg font-semibold text-center mb-4">Standard</h3>
            <p className="text-2xl font-bold text-center mb-4">$59</p>
            <ul className="text-sm">
              <li className="mb-2">10 Pages Website</li>
              <li className="mb-2">Standard Support</li>
              <li className="mb-2">More Features</li>
            </ul>
            <button className="block mx-auto bg-yellow-500 text-white py-2 px-4 mt-6 rounded-md hover:bg-yellow-400">
              Get Started
            </button>
          </div>
        </div>

        {/* Package 3 */}
        <div
          className={`bg-white shadow-md rounded-lg w-full md:w-1/3 md:mx-4 mb-4 hover:cursor-pointer ${
            plan === premium.fr
              ? "outline outline-offset-4 outline-yellow-400 "
              : "outline-none"
          }`}
          onClick={() => {
            handlePlan(premium.fr);
          }}
        >
          <div className="py-6 px-4">
            <h3 className="text-lg font-semibold text-center mb-4">Premium</h3>
            <p className="text-2xl font-bold text-center mb-4">$99</p>
            <ul className="text-sm">
              <li className="mb-2">Unlimited Pages</li>
              <li className="mb-2">Priority Support</li>
              <li className="mb-2">Advanced Features</li>
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
