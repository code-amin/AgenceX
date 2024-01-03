const Reviews = () => {
  return (
    <div id="testimonials" className="bg-gray-900 text-white px-8">
      <h2 className="text-2xl font-bold mb-4">Client Reviews</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-yellow-500 mb-4">
            "Fantastic service! Highly recommended!"
          </p>
          <p className="text-sm">- John Doe</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-yellow-500 mb-4">
            "Great experience working with this agency."
          </p>
          <p className="text-sm">- Jane Smith</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-yellow-500 mb-4">
            "Amazing experience working with the team"
          </p>
          <p className="text-sm">- Sarah Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
