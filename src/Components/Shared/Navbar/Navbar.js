import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">DOCTORS PORTAL</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link me-5 active" style={{color:'#B3B1B1',fontWeight:'bold'}} aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-5" style={{color:'#B3B1B1',fontWeight:'bold'}} href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-5" style={{color:'#B3B1B1',fontWeight:'bold'}} href="#">Dental Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-5" style={{color:'#B3B1B1',fontWeight:'bold'}} href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-5" style={{color:'#B3B1B1',fontWeight:'bold'}} href="#">Blog</a>
                    </li>
                        <a class="nav-link me-5" style={{color:'#B3B1B1',fontWeight:'bold'}} href="#">Contact Us</a>
                    <li class="nav-item">
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;