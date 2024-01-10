

const Services = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Custom app development */}
          <div className="p-6 shadow-lg rounded-lg relative">
            <h3 className="text-xl font-semibold mb-4 relative">Custom App Development
              <span className="absolute left-0 bottom-[-0.55556rem] bg-[#e7e729] rounded-[0.11111rem] content-[''] h-[0.22222rem] transition-all duration-250 ease w-[1.83333rem]"></span>
            </h3> 
          </div>
          {/* Product design (UX/UI) */}
          <div className="p-6  shadow-lg rounded-lg relative">
            <h3 className="text-xl font-semibold mb-4 relative">Product Design (UX/UI)
            <span className="absolute left-0 bottom-[-0.55556rem] bg-[#e7e729] rounded-[0.11111rem] content-[''] h-[0.22222rem] transition-all duration-250 ease w-[1.83333rem]"></span>
            </h3>
          </div>
          <div className="p-6  shadow-lg rounded-lg relative">
            <h3 className="text-xl font-semibold mb-4 relative">Web Development
            <span className="absolute left-0 bottom-[-0.55556rem] bg-[#e7e729] rounded-[0.11111rem] content-[''] h-[0.22222rem] transition-all duration-250 ease w-[1.83333rem]"></span>
            </h3>
          </div>
          <div className="p-6  shadow-lg rounded-lg relative">
            <h3 className="text-xl font-semibold mb-4 relative">eCommerce solutions
            <span className="absolute left-0 bottom-[-0.55556rem] bg-[#e7e729] rounded-[0.11111rem] content-[''] h-[0.22222rem] transition-all duration-250 ease w-[1.83333rem]"></span>
            </h3>
          </div>
          <div className="p-6  shadow-lg rounded-lg relative">
            <h3 className="text-xl font-semibold mb-4 relative">SEO optimization
            <span className="absolute left-0 bottom-[-0.55556rem] bg-[#e7e729] rounded-[0.11111rem] content-[''] h-[0.22222rem] transition-all duration-250 ease w-[1.83333rem]"></span>
            </h3>
          </div>
          <div className="p-6  shadow-lg rounded-lg relative">
            <h3 className="text-xl font-semibold mb-4 relative">Automatisation
            <span className="absolute left-0 bottom-[-0.55556rem] bg-[#e7e729] rounded-[0.11111rem] content-[''] h-[0.22222rem] transition-all duration-250 ease w-[1.83333rem]"></span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
