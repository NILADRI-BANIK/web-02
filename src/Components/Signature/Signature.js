import React, { useState } from 'react';
import './Signature.css';
import ElieSaab1 from '../../Assets/Elie Saab1.jpg';
import Replica1 from '../../Assets/Replica1.jfif';
import Aerin1 from '../../Assets/Aerin1.jfif';
import ElieSaab2 from '../../Assets/Elie Saab2.jpg';
import Replica2 from '../../Assets/Replica2.webp';
import Aerin2 from '../../Assets/Aerin2.jfif';

const Signature = () => {
  const [activeTab, setActiveTab] = useState('All Perfume');

  const products = [
    {
      id: 1,
      name: 'Elie Saab',
      price: '$36',
      image: ElieSaab1
    },
    {
      id: 2,
      name: 'Replica',
      price: '$48',
      image: Replica1
    },
    {
      id: 3,
      name: 'Aerin',
      price: '$72',
      image: Aerin1
    },
    {
      id: 4,
      name: 'Elie Saab',
      price: '$36',
      image: ElieSaab2
    },
    {
      id: 5,
      name: 'Replica',
      price: '$48',
      image: Replica2
    },
    {
      id: 6,
      name: 'Aerin',
      price: '$72',
      image: Aerin2
    }
  ];

  const tabs = ['All Perfume', 'New Collection', 'Best Selling', 'Top Brand'];

  return (
    <div className="signature-container">
      <h1 className="signature-title">Grab Your Signature Scent Today!</h1>

      <div className="signature-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`signature-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="signature-products-grid">
        {products.map((product) => (
          <div key={product.id} className="signature-product-card">
            <div className="signature-product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="signature-product-info">
              <h3 className="signature-product-name">{product.name}</h3>
              <p className="signature-product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="signature-pagination">
        <div className="signature-dots">
          <span className="signature-dot active"></span>
          <span className="signature-dot"></span>
          <span className="signature-dot"></span>
          <span className="signature-dot"></span>
          <span className="signature-dot"></span>
        </div>
        <div className="signature-arrows">
          <button className="signature-arrow signature-arrow-left">‹</button>
          <button className="signature-arrow signature-arrow-right">›</button>
        </div>
      </div>
    </div>
  );
};

export default Signature;