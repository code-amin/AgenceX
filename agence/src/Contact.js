const Contact = ({ plan }) => {
  return (
    <div id="contact" className="CONTACT text-center py-8 pt-24 ">
      <h2 className="text-2xl font-bold mb-8">Contactez-nous</h2>
      <form className=" border rounded ">
        <div className="md:flex text-left">
          <label htmlFor="fname">Prénom:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="text-black rounded-sm m-1"
          />

          <label htmlFor="fname">Nom:</label>
          <input type="text" id="fname" name="fname" className="text-black" />
        </div>
        <div className="">
          <label htmlFor="lname">Sujet:</label>
          <input
            className="text-gray-400 text-normal text-italic italic"
            type="text"
            id="plan"
            name="plan"
            placeholder={`${plan}`}
          />
        </div>
        <input
          type="submit"
          className=" mx-auto bg-yellow-500 text-white py-2 px-4 my-4 rounded-md hover:bg-yellow-400"
          value="Soumettre"
        />
      </form>
    </div>
  );
};

export default Contact;
