import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Socials = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Follow Us</h2>
      <div className="flex justify-center">
        <a href="#" className="text-yellow-500 hover:text-yellow-400 mx-4 text-4xl">
          <FaFacebook />
        </a>
        <a href="#" className="text-yellow-500 hover:text-yellow-400 mx-4 text-4xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-yellow-500 hover:text-yellow-400 mx-4 text-4xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-yellow-500 hover:text-yellow-400 mx-4 text-4xl">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Socials;

  