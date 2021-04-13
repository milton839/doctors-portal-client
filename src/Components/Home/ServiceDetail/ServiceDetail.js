import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height:'50px' }} src={service.image} alt=""/>
            <h5 className="my-4 fs-5">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, excepturi?</p>
        </div>
    );
};

export default ServiceDetail;