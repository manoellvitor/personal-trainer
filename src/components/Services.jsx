import React from 'react';
import ServiceOne from "../assets/img/personal-trainer-1.jpg";
import ServiceTwo from "../assets/img/personal-trainer-2.jpg";
import ServiceThree from "../assets/img/personal-trainer-3.jpg";
import ServiceFour from "../assets/img/personal-trainer-4.jpg";
import ServiceCard from "../components/ServiceCard";

// This is static for now, but it can be served from an API or File.
const services = [
  {
    serviceID: 1,
    serviceName: "Fitness assessments",
    serviceImageURL: ServiceOne,
    serviceURL: "services/service-one"
  }, {
    serviceID: 2,
    serviceName: "One-on-one training",
    serviceImageURL: ServiceTwo,
    serviceURL: "services/service-two"
  }, {
    serviceID: 3,
    serviceName: "Lifestyle coaching",
    serviceImageURL: ServiceThree,
    serviceURL: "services/service-three"
  }, {
    serviceID: 4,
    serviceName: "Sports-specific training",
    serviceImageURL: ServiceFour,
    serviceURL: "services/service-four"
  }
]

function Services() {
  return (
    <div className='justify-center items-center flex-1'>
      <div className='flex flex-col'>
        <h1 className='font-logo text-slate-200 text-3xl md:text-4xl text-center uppercase my-10'>What we offer to you</h1>
        <div className='flex flex-col lg:flex-row justify-between gap-6 mx-2'>
          <div className='flex flex-col lg:flex-row justify-between gap-6'>
            {
              services.map((service) => {
                return <ServiceCard service={service} key={service.serviceID} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services