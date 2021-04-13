import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white info_card">
            <div className={`d-flex justify-content-center info_container info_${info.background}`}>
                <div className="me-3">
                    <FontAwesomeIcon className="info_icon" icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;