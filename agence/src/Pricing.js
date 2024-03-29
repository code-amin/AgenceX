const Pricing = ({ onSelectPlan, plan }) => {
  const handlePlan = (price) => {
    onSelectPlan(price);
  };

  const basic = {
    name: "Base",
    price: "299$",
    pages: "1 page",
    support: "Support de base",
    features: "Fonctionnalités limitées",
    fr: "Plan de base - 299$",
  };
  const standard = {
    name: "Standard",
    price: "499$",
    pages: "5 pages",
    support: "Support Standard ",
    features: "Plus de fonctionnalités",
    fr: "Plan Standard - 499$",
  };
  const premium = {
    name: "Premium",
    price: "Contactez-nous",
    pages: "Nombre de pages illimité",
    support: "Support prioritaire",
    features: "Fonctionnalités avancées",
    fr: "Plan Premium",
  };
  return (
    <div id="pricing" className="bg-[#2C3333] py-8 pt-24">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Tarification
      </h2>
      <div className="text-black flex flex-col md:flex-row justify-center mx-4">
        {/* Package 1 */}
        <div
          className={`bg-white shadow-md rounded-lg w-full md:w-1/3 md:mx-4 mb-4 ${
            plan === basic.fr
              ? "outline outline-offset-4 outline-[#E7F6F2]  "
              : "outline-none"
          }`}
          onClick={() => {
            handlePlan(basic.fr);
          }}
        >
          <div className="py-6 px-4 hover:cursor-pointer text-center">
            <h3 className="text-lg font-semibold text-center mb-4">
              {basic.name}
            </h3>
            <p className="text-2xl font-bold text-center mb-4">{basic.price}</p>
            <ul className="text-sm">
              <li className="mb-2">{basic.pages}</li>
              <li className="mb-2">{basic.support}</li>
              <li className="mb-2">{basic.features}</li>
            </ul>
            <a href="/#contact">
              <button className="block mx-auto bg-[#395B64] text-white py-2 px-4 mt-6 rounded-md hover:bg-[#A5C9CA]">
                Démarrer
              </button>
            </a>
          </div>
        </div>

        {/* Package 2 */}
        <div
          className={`bg-white shadow-md rounded-lg w-full md:w-1/3 md:mx-4 mb-4 ${
            plan === standard.fr
              ? "outline outline-offset-4 outline-[#E7F6F2]  "
              : "outline-none"
          }`}
          onClick={() => {
            handlePlan(standard.fr);
          }}
        >
          <div className="py-6 px-4 hover:cursor-pointer text-center">
            <h3 className="text-lg font-semibold text-center mb-4">
              {standard.name}
            </h3>
            <p className="text-2xl font-bold text-center mb-4">
              {standard.price}
            </p>
            <ul className="text-sm">
              <li className="mb-2">{standard.pages}</li>
              <li className="mb-2">{standard.support}</li>
              <li className="mb-2">{standard.features}</li>
            </ul>
            <a href="/#contact">
              <button className="block mx-auto bg-[#395B64] text-white py-2 px-4 mt-6 rounded-md hover:bg-[#A5C9CA]">
                Démarrer
              </button>
            </a>
          </div>
        </div>

        {/* Package 3 */}
        <div
          className={`bg-white shadow-md rounded-lg w-full md:w-1/3 md:mx-4 mb-4 ${
            plan === premium.fr
              ? "outline outline-offset-4 outline-[#E7F6F2] "
              : "outline-none"
          }`}
          onClick={() => {
            handlePlan(premium.fr);
          }}
        >
          <div className="py-6 px-4 hover:cursor-pointer text-center">
            <h3 className="text-lg font-semibold text-center mb-4">
              {premium.name}
            </h3>
            <p className="text-2xl font-bold text-center mb-4">
              {premium.price}
            </p>
            <ul className="text-sm">
              <li className="mb-2">{premium.pages}</li>
              <li className="mb-2">{premium.support}</li>
              <li className="mb-2">{premium.features}</li>
            </ul>
            <a href="/#contact">
              <button className="block mx-auto bg-[#395B64] text-white py-2 px-4 mt-6 rounded-md hover:bg-[#A5C9CA]">
                Démarrer
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
