import CardTag from "./CardTag";

const Realizations = () => {
  return (
    <div id="realizations" className="bg-gray-900 text-white pt-24 ">
      <h2 className="text-4xl font-bold text-center mb-4">Réalisations</h2>
      <div
        id="cardsWrapper"
        className="flex flex-col md:flex-row gap-4 lg:gap-10 justify-center  "
      >
        <div
          id="card"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-1000 md:max-w-[350px] md:order-2 lg:max-w-[450px] "
        >
          <h3 className="rounded-xl text-2xl font-bold mb-2">PWR Vision</h3>
          <p className=" mb-4 min-h-[75px]">
            Commerce en ligne Shopify pour vente d'accessoires oculaires.
          </p>
          <img
            className="rounded-xl mb-4 max-h-[200px] w-fit object-cover object-top "
            src="https://s3.amazonaws.com/i.snag.gy/c6nGRr.jpg"
            alt="A mobile ecommerce site"
          />{" "}
          <div className="flex flex-wrap">
            <CardTag text={"#eCommerce"} />
            <CardTag text={"#Branding"} />
            <CardTag text={"#CSS"} />
          </div>
        </div>
        <div
          id="card"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-1000 md:max-w-[350px] md:order-1  lg:max-w-[450px]"
        >
          <a href="" target="_blank">
            <h3 className="rounded-xl text-2xl font-bold mb-2">ReachOut</h3>
            <p className=" mb-4 min-h-[75px]">
              Application web pour un organisme qui promouvois la santé physique
              et mentale.
            </p>
            <img
              className="rounded-xl mb-4 h-[200px] object-cover object-left "
              src="https://user-images.githubusercontent.com/105254146/197800267-0e7b76d7-5bec-402f-9ee1-601efff82228.png"
              alt="A mental health website"
            />{" "}
            <div className="flex flex-wrap">
              <CardTag text={"#HealthTech"} />
              <CardTag text={"#React"} />
              <CardTag text={"#API"} />
            </div>
          </a>
        </div>
        <div
          id="card"
          className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-1000 md:max-w-[350px] md:order-3  lg:max-w-[450px]"
        >
          <a href="" target="_blank">
            <h3 className="rounded-xl text-2xl font-bold mb-2">Go Finance</h3>
            <p className=" mb-4 min-h-[75px]">
              Application web frontale et dorsale pour suivre ses titres et
              nouvelles boursières.
            </p>
            <img
              className="rounded-xl mb-4 h-[200px] object-cover object-top w-fit"
              src="https://user-images.githubusercontent.com/73975219/196069436-e6f9ef5c-737c-44eb-a47a-f1aa8cf83f15.png"
              alt="A finance web application"
            />{" "}
            <div className="flex flex-wrap">
              <CardTag text={"#FinTech"} />
              <CardTag text={"#JS"} />
              <CardTag text={"#MongoDB"} />
              <CardTag text={"#Rest"} />
            </div>
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

export default Realizations;
