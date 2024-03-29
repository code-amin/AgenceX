import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="bg-[#2C3333] text-white py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Suivez-nous</h2>
      <div className="flex justify-center">
        <a
          href="https://www.facebook.com/Agence X"
          target="_blank"
          className="text-[#395B64] hover:text-yellow-400 mx-4 text-4xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/@Agence X"
          target="_blank"
          className="text-[#395B64] hover:text-yellow-400 mx-4 text-4xl"
        >
          <FaYoutube />
        </a>
        <a
          href="https://twitter.com/Agence X"
          target="_blank"
          className="text-[#395B64] hover:text-yellow-400 mx-4 text-4xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/Agence X/"
          target="_blank"
          className="text-[#395B64] hover:text-yellow-400 mx-4 text-4xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/Agence X"
          target="_blank"
          className="text-[#395B64] hover:text-yellow-400 mx-4 text-4xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Socials;
