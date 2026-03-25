
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

// Plant Data: 3 Categories, 6 Plants Each (Meets Minimum Requirements)
const plantCategories = [
  {
    categoryName: "Air Purifying Plants",
    plants: [
      { img: "https://pixabay.com/images/download/spider-plant-4764074_640.jpg", name: "Spider Plant", description: "Produces oxygen at night improving air quality, filters formaldehyde and xylene", cost: "$12" },
      { img: "https://pixabay.com/images/download/snake-plant-1872509_640.jpg", name: "Snake Plant", description: "Nearly indestructible, filters formaldehyde and benzene, thrives in low light", cost: "$15" },
      { img: "https://pixabay.com/images/download/peace-lily-4074514_640.jpg", name: "Peace Lily", description: "Removes mold spores and purifies the air, blooms with beautiful white flowers", cost: "$18" },
      { img: "https://pixabay.com/images/download/pothos-1626959_640.jpg", name: "Golden Pothos", description: "Trailing vine that filters carbon monoxide and formaldehyde, perfect for beginners", cost: "$10" },
      { img: "https://pixabay.com/images/download/rubber-plant-6931304_640.jpg", name: "Rubber Plant", description: "Large glossy leaves that remove airborne toxins, grows well in indirect light", cost: "$22" },
      { img: "https://pixabay.com/images/download/zz-plant-4900975_640.jpg", name: "ZZ Plant", description: "Drought-tolerant, filters toluene and xylene, survives in very low light conditions", cost: "$20" }
    ]
  },
  {
    categoryName: "Aromatic Plants",
    plants: [
      { img: "https://pixabay.com/images/download/lavender-1851268_640.jpg", name: "Lavender", description: "Calming fragrance, promotes better sleep, repels insects, beautiful purple blooms", cost: "$16" },
      { img: "https://pixabay.com/images/download/rosemary-8189305_640.jpg", name: "Rosemary", description: "Woody aromatic herb, perfect for cooking, improves memory and concentration", cost: "$14" },
      { img: "https://pixabay.com/images/download/mint-2324368_640.jpg", name: "Peppermint", description: "Refreshing scent, aids digestion, repels pests, great for teas and cocktails", cost: "$8" },
      { img: "https://pixabay.com/images/download/jasmine-4247484_640.jpg", name: "Jasmine", description: "Sweet night-blooming fragrance, reduces anxiety, beautiful white star-shaped flowers", cost: "$24" },
      { img: "https://pixabay.com/images/download/basil-6153511_640.jpg", name: "Sweet Basil", description: "Aromatic culinary herb, anti-inflammatory properties, thrives in bright sunlight", cost: "$9" },
      { img: "https://pixabay.com/images/download/lemon-balm-4342350_640.jpg", name: "Lemon Balm", description: "Citrusy scent, reduces stress and improves sleep, great for herbal teas", cost: "$11" }
    ]
  },
  {
    categoryName: "Medicinal Plants",
    plants: [
      { img: "https://pixabay.com/images/download/aloe-vera-1975465_640.jpg", name: "Aloe Vera", description: "Gel soothes burns and skin irritations, purifies the air, low maintenance", cost: "$13" },
      { img: "https://pixabay.com/images/download/chamomile-5534634_640.jpg", name: "Chamomile", description: "Calming flowers for tea, aids sleep and digestion, anti-inflammatory properties", cost: "$12" },
      { img: "https://pixabay.com/images/download/echinacea-1238330_640.jpg", name: "Echinacea", description: "Boosts immune system, reduces cold symptoms, beautiful purple coneflowers", cost: "$18" },
      { img: "https://pixabay.com/images/download/lemon-grass-2940931_640.jpg", name: "Lemongrass", description: "Antioxidant-rich, aids digestion, repels mosquitoes, great for teas and cooking", cost: "$15" },
      { img: "https://pixabay.com/images/download/thyme-7686501_640.jpg", name: "Thyme", description: "Antibacterial and antifungal properties, respiratory support, culinary herb", cost: "$10" },
      { img: "https://pixabay.com/images/download/calendula-4429994_640.jpg", name: "Calendula", description: "Heals skin wounds and irritations, anti-inflammatory, edible bright orange flowers", cost: "$14" }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Handle Add to Cart
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // Check if item is already in cart
  const isInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  return (
    <div className="container">
      {plantCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="plant-category">
          <h2 className="category-title">{category.categoryName}</h2>
          <div className="plants-grid">
            {category.plants.map((plant, plantIndex) => (
              <div key={plantIndex} className="plant-card">
                <div className="plant-img">
                  <img src={plant.img} alt={plant.name} />
                </div>
                <div className="plant-info">
                  <h3 className="plant-name">{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  <p className="plant-cost">{plant.cost}</p>
                  {/* Add to Cart Button: Disables after adding */}
                  <button
                    className={`add-to-cart-btn ${isInCart(plant.name) ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.name)}
                  >
                    {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
