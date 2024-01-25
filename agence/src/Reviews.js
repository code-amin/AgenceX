import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  return (
    <div id="testimonials" className="bg-gray-900 text-white px-8 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Ce que nos clients pensent</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="bg-gray-800 p-6 rounded-lg flex items-center flex-col">
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <p className="text-yellow-500 ml-2">
            "Fantastic service! Highly recommended!"
          </p>
          <p className="text-sm ml-2">- Alexandre Bolduc</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center flex-col">
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />

          </div>
          <p className="text-yellow-500 ml-2">
            "Great experience working with this agency."
          </p>
          <p className="text-sm ml-2">- Mélodie Demers</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center flex-col">
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <p className="text-yellow-500 ml-2">
            "Amazing experience working with the team"
          </p>
          <p className="text-sm ml-2">- Sarah Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
