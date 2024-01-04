const Realizations = () => {
  return (
    <div id="realizations" className="bg-gray-900 text-white pt-24">
      <h2 className="text-2xl font-bold text-center mb-4">Realizations </h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-white-500 mb-4">Website for a digital analytics coach</p>
          <img
            className="rounded-xl"
            src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg"
          />{" "}
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-white-500 mb-4">
            Payment processor for an e-commerce{" "}
          </p>
          <img
            className="rounded-xl"
            src="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.webp"
          />{" "}
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-white-500 mb-4">
            Responsiveness for a website and SEO ranking{" "}
          </p>
          <img
            className="rounded-xl"
            src="https://themewagon.com/wp-content/uploads/2022/03/screencapture-technext-github-io-startup2-index-html-2022-03-07-10_56_37-1.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Realizations;
