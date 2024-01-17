import React from "react";

const Contact = ({ plan }) => {
  // add .env react variable in brackets 👇
  const formSpreeEndpoint = "";

  const checkPlaceholder = () => {
    const input = document.getElementById("plan");
    if (input.value === "") {
      input.value = plan;
    }
  };

  return (
    <form
      action={formSpreeEndpoint}
      method="POST"
      className="max-w-3xl mx-auto bg-white rounded-lg p-4 text-black"
    >
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
          type="text"
          id="contactInfo"
          name="contactInfo"
          required
          placeholder="Courriel ou numéro de tel."
          className="mt-1 p-2 w-full border rounded-md"
          pattern="^(?:\d{10}|\w+@\w+\.\w{2,3})$"
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
        className="bg-yellow-500 text-white p-2 rounded-md"
        onClick={checkPlaceholder}
      >
        Soumettre
      </button>
    </form>
  );
};

export default Contact;
