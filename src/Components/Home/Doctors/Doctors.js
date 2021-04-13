import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor.png';
import Doctor from '../Doctor/Doctor';

const doctorsData = [
    {
        doctorName:'Dr. Cudi',
        doctorImg : doctor,
        date : '23 April 2019',
        phone: '+880-188-934789'
    },
    {
        doctorName:'Dr. Sinthia',
        doctorImg : doctor,
        date : '23 April 2019',
        phone: '+880-188-934788'
    },
    {
        doctorName:'Dr. Cudi',
        doctorImg : doctor,
        date : '23 April 2019',
        phone: '+880-188-934787'
    },
]

const Doctors = () => {

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                     doctorsData.map(doctor =><Doctor doctor={doctor} key={doctor.phone}></Doctor>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;