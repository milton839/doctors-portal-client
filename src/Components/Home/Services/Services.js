import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whiteTeeth from '../../../images/whiteTeeth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData =[
    {
        name: 'Flouride Treatment',
        image:flouride
    },
    {
        name: 'Cavity Filling',
        image:cavity
    },
    {
        name: 'Teeth Whitening',
        image:whiteTeeth
    }
]

const Services = () => {
    return (
        <section className="services_container mt-5">
            <div className="text-center">
                <h5 style={{ color:'#1CC7C1' }}>OUR SERVICES</h5>
                <h2 style={{ color:'#3A4256' }}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                    {
                        servicesData.map(service =><ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;