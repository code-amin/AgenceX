const Contact = () => {
  return (
    <div className="CONTACT  text-center py-8 pt-24">
      <h2 className="text-2xl font-bold text-white text-center mb-8">
        Contactez-nous{" "}
      </h2>
      <form className="border rounded ">
        <label for="fname">Prénom:</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Sujet:</label>
        <input
          className="text-gray-400 text-normal text-italic italic"
          type="text"
          id="plan"
          name="plan"
          value={` 29$ plan`}
        />
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
