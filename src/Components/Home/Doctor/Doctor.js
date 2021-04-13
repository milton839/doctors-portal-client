import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    const {doctorName, doctorImg, date, phone } = doctor;
    return (
        <div className="col-md-4 text-center">
            <div className="align-items-">
                <img className="img-fluid" style={{ height:'250px' }} src={doctorImg} alt=""/>
                <div className="">
                    <h3 className="text-primary">{doctorName}</h3>
                    <p className="m-0"><FontAwesomeIcon icon={faPhoneAlt} /> {phone}</p>
                </div>
            </div>
       </div>
    );
};

export default Doctor;