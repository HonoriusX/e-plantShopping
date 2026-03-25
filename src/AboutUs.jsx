
Create/overwrite `src/AboutUs.jsx`:
```jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '30px 20px' }}>
      <h1 style={{ color: '#2e7d32', fontSize: '2.2rem', marginBottom: '20px' }}>About Paradise Nursery</h1>
      <div style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#333' }}>
        <p>Welcome to Paradise Nursery, where green meets serenity! For over 10 years, we have been dedicated to bringing nature closer to homes and businesses with our premium selection of house plants.</p>
        <p>Our mission is to make plant parenting easy and accessible for everyone, from beginners to experienced plant enthusiasts. We carefully curate our collection to include only the healthiest, most resilient plants that thrive in indoor environments.</p>
        <p>From air-purifying plants that clean your indoor air, to aromatic plants that fill your space with natural fragrance, and medicinal plants with holistic benefits - we have something for every space and every need.</p>
        <p>At Paradise Nursery, we believe that plants are more than just decor - they are a way to connect with nature, improve your wellbeing, and create a peaceful sanctuary in your home.</p>
      </div>
    </div>
  );
};

export default AboutUs;
