import React from 'react';
import './Home.css';
import perfumeImage from '../../Assets/1.webp';
import perfumeImg from '../../Assets/2.jpg';
import customer1 from "../../Assets/customer-1.jpg";
import customer2 from "../../Assets/customer-2.jpg";

const Home = () => {
    return (
        <div className="home-container">
            {/* Top Section */}
            <div className="top-section">
                {/* Happy Customers */}
                <div className="happy-customers">
                    <img src={customer1} alt="Customer 1" className="customer-img" />
                    <img src={customer2} alt="Customer 2" className="customer-img" />
                    <div className="customer-text">
                        <span>Happy</span>
                        <span>Customers</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h1 className="main-title">Best Perfume</h1>
                <h1 className="main-subtitle">Collection for You</h1>

                <p className="description">
                    Discover the Best Perfume Collection: Find Your Signature Scent Today
                </p>

                <button className="buy-now-btn">Buy Now</button>

                {/* Left Perfume Image */}
                <div className="left-perfume">
                    <img
                        src={perfumeImg}
                        alt="Perfume bottle left"
                        className="perfume-image-main"
                    />
                </div>

                {/* Right Perfume Section with Unique Badge */}
                <div className="right-perfume" style={{ marginTop: '-40px' }}>
                    <div className="unique-product">
                        <div className="unique-badge">

                        </div>
                        <div className="unique-img-wrapper">
                            <img
                                src={perfumeImage}
                                alt="Perfume bottle right"
                                className="unique-img"
                            />
                        </div>
                    </div>
                </div>

                <div className="essence-section">
                    {/* Add the essence-unleashed-title above the content */}
                    <h2 className="essence-unleashed-title" style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#b48a78',
                        marginBottom: '10px',
                        marginTop: '-98px',
                        textAlign: 'center'
                    }}>
                        essence unleashed
                    </h2>
                    <div className="essence-content">
                        <div>Unleash Your</div>
                        <div>Essence with the</div>
                        <div>Every Spritz.</div>
                    </div>
                    <button
                        className="scroll-down-btn"
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '20px auto 0',
                            outline: 'none'
                        }}
                        onClick={() => {
                            window.scrollTo({
                                top: document.body.scrollHeight,
                                behavior: 'smooth'
                            });
                        }}
                        aria-label="Scroll to bottom"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b48a78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                        <span style={{fontSize: '0.8rem', color: '#b48a78', marginTop: '2px'}}>Go Down</span>
                    </button>
                </div>

                <div className="bottom-nav">
                    <span className="nav-item">Fragrance Defined</span>
                    <span className="nav-separator">✱</span>
                    <span className="nav-item">Scent Of Elegance</span>
                    <span className="nav-separator">✱</span>
                    <span className="nav-item">Perfume Essence</span>
                    <span className="nav-separator">✱</span>
                    <span className="nav-item">Aroma Inspiration</span>
                    <span className="nav-separator">✱</span>
                    <span className="nav-item">Signature Scent</span>
                </div>
            </div>
        </div>
    );
};

export default Home;