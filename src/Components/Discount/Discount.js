import React, { useState, useEffect } from 'react';
import './Discount.css';
import Bottle1 from '../../Assets/bottle-1.jfif';
import Bottle2 from '../../Assets/bottle-2.jfif';



const Top_Selling = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleExploreClick = () => {
        // Add your navigation logic here
        console.log('Explore Now clicked');
        // Example: navigate to products page
        // window.location.href = '/products';
    };

    return (
        <div className="discount-perfume-container">
            <div className="content-wrapper">
                {/* Left Side - Circular Design with Perfume Images */}
                <div className={`left-section ${isVisible ? 'animate-in' : ''}`}>
                    <div className="circular-frame">
                        {/* Circular Text */}
                        <div className="circular-text">
                            <svg viewBox="0 0 200 200" className="circular-svg">
                                <defs>
                                    <path
                                        id="circle-path"
                                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                                    />
                                </defs>
                                <text className="circular-text-element">
                                    <textPath href="#circle-path" startOffset="0%">
                                        Perfume New Collection • The Best With 20% Discount •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="center-star">★</div>
                        </div>

                        {/* Main Perfume Bottles */}
                        <div className="perfume-bottles">
                            <div className="bottle-background">
                                {/* Background perfume bottle */}
                                <img
                                    src={Bottle2}
                                    alt="Background perfume"
                                    className="bg-perfume"
                                />

                                {/* Decorative branch */}
                                <div className="decorative-branch">
                                    <svg width="60" height="40" viewBox="0 0 60 40">
                                        <path d="M5 20 Q15 10 25 20 T45 20" stroke="#8B4513" strokeWidth="2" fill="none" />
                                        <circle cx="10" cy="15" r="2" fill="#228B22" />
                                        <circle cx="20" cy="25" r="2" fill="#228B22" />
                                        <circle cx="35" cy="15" r="2" fill="#228B22" />
                                        <circle cx="42" cy="22" r="2" fill="#228B22" />
                                    </svg>
                                </div>
                            </div>

                            {/* Featured perfume bottle in circle */}
                            <div className="featured-bottle">
                                <img
                                    src={Bottle1}
                                    alt="Background perfume"
                                    className="bg-perfume"
                                />
                            </div>
                        </div>

                        {/* Best another one of the year text */}
                        <div className="best-text">
                            <span className="best-line1">Best another</span>
                            <span className="best-line2">one of the year</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Text Content */}
                <div className={`right-section ${isVisible ? 'animate-in-right' : ''}`}>
                    <div className="text-content">
                        <h1 className="main-heading">
                            Explore from 20%<br />
                            Discountable Perfume
                        </h1>

                        <p className="subtitle">
                            Find Your Signature Scent Today and enjoy the smell.
                        </p>

                        <button className="explore-button" onClick={handleExploreClick}>
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top_Selling;