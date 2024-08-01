import React from "react";

const serviceLists = [
  {
    id: 1,
    title: "Milk",
    des: "Enhance your experience with our premium-quality milk",
    img: "/images/services/icon1.jpg",
  },
  {
    id: 2,
    title: "Milk Products",
    des: "Enhance your experience with our different milk products.",
    img: "/images/services/icon2.jpg",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering n",
    img: "/images/services/icon3.jpg",
  },
  {
    id: 4,
    title: "Ice-creams & additional products",
    des: "Experiencethe  DairyTech's creamy & deliciousice ice-cream!",
    img: "/images/services/icon6.jpg",
  },
];

const Services = () => {
  return (
    <div className="section-container bg-gradient-to-r  from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% ">
      <div className="flex flex-col md:flex-row py-20 items-center justify-between gap- ">
        {/* text */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Dairy Journey</p>
            <h2 className="title ">Our DairyTech Journey and Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Driven by our passion, we create unforgettable experiences with
              our dairy products and offer exceptional service, combining dairy
              expertise with genuine care.
            </p>

            <button className="bg-green hover:bg-gray-400 font-semibold btn text-white hover:text-black px-8 py-2 rounded-full">
              Explore
            </button>
          </div>
        </div>

        {/* images */}
        <div className="md:w-1/2 ">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className=" bg-gra shadow-md rounded-sm py-6 px-4 text-center space-y-2 text-green cursor-pointer 
                hover:border hover:border-green transition-all duration-200"
              > 
                <img src={service.img} alt="" className=" mx-auto h-13" />
                <h5 className="pt-2 font-semibold"> {service.title}</h5>
                <p className="text-[#90BD95]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
