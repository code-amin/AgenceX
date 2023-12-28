const Process = () => {
  return (
    <div id="process" className="bg-gray-900 text-white p-8">
      <h2 className="text-2xl font-bold text-center mb-4">
        Our 3 Step Process
      </h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-white-500 mb-4">1. Understanding your needs </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-white-500 mb-4">
            2. Delivery of a first solution{" "}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-white-500 mb-4">
            3. Adjustments and final approval from you{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
