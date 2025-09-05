import React, { useState, useEffect } from 'react';
import './Top_Selling.css';
import Elie_Saab from '../../Assets/Elie_Saab.jfif';
import Replica from '../../Assets/Replica.jfif';
import Aerin from '../../Assets/Aerin.webp';

const Top_Selling = () => {
    const [selectedPerfume, setSelectedPerfume] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Perfume data
    const perfumeData = {
        'elie-saab': {
            name: 'Elie Saab Le Parfum',
            brand: 'Elie Saab',
            description:
                'A luminous and sensual fragrance that captures the essence of the ELIE SAAB woman with radiant orange blossom and elegant jasmine.',
            notes: ['Orange Blossom', 'Jasmine', 'Patchouli', 'Cedar', 'Rose Honey'],
            price: '$89.99',
            image: Elie_Saab,   // ✅ Use the imported image here
        },

        'replica': {
            name: 'Replica By the Fireplace',
            brand: 'Replica',
            description: 'A warm and cozy fragrance that evokes memories of sitting by a crackling fireplace on a cold winter evening.',
            notes: ['Chestnut', 'Pink Pepper', 'Orange Blossom', 'Clove', 'Vanilla', 'Cashmeran'],
            price: '$134.99',
            image: Replica   // ✅ Use imported image instead of URL
        },

        'aerin': {
            name: 'Aerin Amber Musk',
            brand: 'Aerin',
            description: 'A sophisticated blend of amber and musk that embodies effortless elegance and timeless beauty.',
            notes: ['Amber', 'Musk', 'Rose Centifolia', 'Coconut Water'],
            price: '$102.99',
            image: Aerin
        }
    };

    useEffect(() => {
        // Add animation delays for staggered effect
        const perfumeItems = document.querySelectorAll('.perfume-item');
        perfumeItems.forEach((item, index) => {
            item.style.animationDelay = `${0.2 + (index * 0.2)}s`;
        });
    }, []);

    const handlePerfumeClick = (perfumeKey) => {
        setSelectedPerfume(perfumeData[perfumeKey]);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedPerfume(null);
    };

    const handleAddToCart = () => {
        alert(`Added ${selectedPerfume.name} to your collection!`);
        closeModal();
    };

    return (
        <div className="top-selling-wrapper">
            <div className="top-selling-container">
                <div className="container">
                    <header className="title-section">
                        <h1>Top-Selling Perfumes -</h1>
                        <h2>The Most Popular <span className="script-text">and Best</span></h2>
                        <h3>Scents of the Year Collection</h3>
                    </header>

                    <div className="perfumes-grid">
                        <div
                            className="perfume-item"
                            onClick={() => handlePerfumeClick('elie-saab')}
                        >
                            <div className="perfume-image-container">
                                <div className="perfume-circle">
                                    <img
                                        src={Elie_Saab}
                                        alt="Elie Saab Le Parfum"
                                        className="perfume-bottle"
                                    />
                                </div>
                            </div>

                            <h4>Elie Saab</h4>
                        </div>

                        <div
                            className="perfume-item"
                            onClick={() => handlePerfumeClick('replica')}
                        >
                            <div className="perfume-image-container">
                                <div className="perfume-circle">
                                    <img
                                        src={Replica}
                                        alt="Replica By the Fireplace"
                                        className="perfume-bottle"
                                    />
                                </div>
                            </div>
                            <h4>Replica</h4>
                        </div>

                        <div
                            className="perfume-item"
                            onClick={() => handlePerfumeClick('aerin')}
                        >
                            <div className="perfume-image-container">
                                <div className="perfume-circle">
                                    <img
                                        src={Aerin}
                                        alt="Aerin Amber Musk"
                                        className="perfume-bottle"
                                    />
                                </div>
                            </div>
                            <h4>Aerin</h4>
                        </div>
                    </div>

                    <div className="description">
                        <p>Discover the top-selling perfumes in our exclusive collection.</p>
                        <p>Explore the most popular scents of the year, from classic fragrances to trendy new releases. Find your perfect perfume and make a lasting impression.</p>
                    </div>

                    <div className="unique-text">
                        <span className="unique-script">Unique smells</span>
                        <span className="unique-from">from others</span>
                    </div>
                </div>

                {/* Modal */}
                {showModal && selectedPerfume && (
                    <div className="perfume-modal" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-button" onClick={closeModal}>&times;</span>
                            <div className="modal-image">
                                <img src={selectedPerfume.image} alt={selectedPerfume.name} />
                            </div>
                            <h2>{selectedPerfume.name}</h2>
                            <p className="perfume-description">{selectedPerfume.description}</p>
                            <div className="perfume-notes">
                                <h4>Fragrance Notes:</h4>
                                <div className="notes-grid">
                                    {selectedPerfume.notes.map((note, index) => (
                                        <span key={index} className="note-tag">{note}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="perfume-price">{selectedPerfume.price}</p>
                            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                                Add to Collection
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Top_Selling;