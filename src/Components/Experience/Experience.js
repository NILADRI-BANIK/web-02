import React from 'react';
import './Experience.css';
import abc from '../../Assets/abc.avif'; 
import ade from '../../Assets/ade.jfif';     

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="experience-content">
                {/* Main Title */}
                <div className="experience-header">
                    <h1 className="experience-main-title">
                        <span className="cursive-text">With quality</span> Unlock the Benefits:<br />
                        Transform Your Experience <span className="cursive-text">And feel</span>
                    </h1>
                </div>

                {/* Body */}
                <div className="experience-body">
                    {/* Left Section */}
                    <div className="experience-left">
                        <p className="left-description">
                            Discover the top-selling<br />
                            perfumes in our exclusive<br />
                            collection.
                        </p>

                        <div className="asterisk-symbol">✱</div>

                        <p className="left-subtitle">
                            Find your perfect perfume and<br />
                            make a lasting impression.
                        </p>
                    </div>

                    {/* Center Image Section */}
                    <div className="experience-center">
                        <div className="image-wrapper">
                            {/* Big Oval */}
                            <div className="main-image">
                                <img src={abc} alt="Elie Saab Perfume" />
                            </div>

                            {/* Small Circle Overlapping */}
                            <div className="circle-image">
                                <img src={ade} alt="Chanel Perfume" />
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="experience-right">
                        <p className="right-text">
                            <span className="cursive-text">Best another</span><br />
                            <span className="cursive-text">one of the year</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
