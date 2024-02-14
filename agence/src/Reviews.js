import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div
      id="testimonials"
      className="bg-[#2C3333] text-[#A5C9CA] px-8 py-12 text-center"
    >
      <h2 className="text-2xl font-bold mb-4">Ce que nos clients pensent</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="bg-gray-800 p-6 rounded-lg flex items-center flex-col">
          <div className="flex items-center">
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
          </div>
          <p className="text-white ml-2">
            "Wow Wow Wow C'est tout ce que j'ai a dire!"
          </p>
          <p className="text-sm ml-2">- Mario Cloutier</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center flex-col">
          <div className="flex items-center">
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
          </div>
          <p className="text-white ml-2">
            "Agency X was very professional in our consulting process"
          </p>
          <p className="text-sm ml-2">- Barbara Reichter</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center flex-col">
          <div className="flex items-center">
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
            <FaStar className="text-[#A5C9CA]" />
          </div>
          <p className="text-white ml-2">"I would recommend 1000%"</p>
          <p className="text-sm ml-2">- Jenny McLean</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
