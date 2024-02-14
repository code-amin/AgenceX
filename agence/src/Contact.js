import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = ({ plan }) => {
  const navigate = useNavigate();

  const checkPlaceholder = () => {
    const input = document.getElementById("plan");
    if (input.value === "") {
      input.value = plan;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log(formData))
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };

  return (
    <div className="pt-24" id="contact">
      <form
        method="POST"
        className="max-w-3xl mt-24 mx-auto bg-white rounded-lg p-4 text-black"
        name="clientForm"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="clientForm" />

        <h2 className="text-3xl font-bold mb-4 text-center">Contactez-nous</h2>
        <div className="my-4">
          <div className="flex flex-nowrap gap-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Prénom"
              className="p-2 w-full md:w-1/2 border rounded-md"
              title="Entrez un prénom."
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Nom"
              className="p-2 w-full md:w-1/2 border rounded-md"
              title="Entrez un nom de famille."
            />
          </div>
          <input
            minLength="4"
            type="text"
            id="contactInfo"
            name="contactInfo"
            required
            placeholder="Courriel ou numéro de tel."
            className="mt-1 p-2 w-full border rounded-md"
            pattern="^([0-9]{10})|([0-9]{3}\+\-[0-9]{3}\+\-[0-9]{3})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,5})$"
            title="Entrez un courriel ou numéro de tél."
          />
          <input
            type="text"
            id="plan"
            name="plan"
            required
            placeholder={`${plan}`}
            className="mt-1 p-2 w-full border rounded-md"
          />
          <textarea
            type="text"
            id="comment"
            name="comment"
            placeholder="Commentaire, question..."
            className="mt-1 p-2 w-full border rounded-md resize-both overflow-auto"
          />
        </div>

        <button
          type="submit"
          className="bg-[#395B64] text-white p-2 block mx-auto w-2/5 py-2 px-4 mt-6 rounded-md hover:bg-[#A5C9CA]"
          onClick={checkPlaceholder}
        >
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default Contact;
