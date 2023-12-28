

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-900 py-8">
      <h2 className="text-2xl font-bold text-white text-center mb-8">Our Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center">
        {/* Package 1 */}
        <div className="bg-white shadow-md rounded-lg w-full md:w-1/3 mx-4 mb-4">
          <div className="py-6 px-4">
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
        <div className="bg-white shadow-md rounded-lg w-full md:w-1/3 mx-4 mb-4">
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
        <div className="bg-white shadow-md rounded-lg w-full md:w-1/3 mx-4 mb-4">
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

