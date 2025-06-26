import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import MenuCard from '../components/Menu/MenuCard';
import Footer from '../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('meal');
  const [inputValue, setInputValue] = useState('');

  const fetchMenuItems = async (term) => {
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${term}&search_simple=1&action=process&json=1&page_size=10`
      );
      const data = await response.json();
      const items = data.products.map(product => ({
        imageUrl: product.image_url || 'https://via.placeholder.com/300',
        itemName: product.product_name || 'Producto sin nombre',
        description: product.generic_name || 'Sin descripción disponible',
        price: '$' + (Math.random() * 20000 + 5000).toFixed(0)
      }));
      setMenuItems(items);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  useEffect(() => {
    fetchMenuItems(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchTerm(inputValue.trim());
    }
  };

  return (
    <div className="homepage-root">
      <Navbar />

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Buscar comida (ej: pizza, ensalada...)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>

      <div className="menu-container">
        {menuItems.map((item, index) => (
          <MenuCard
            key={index}
            imageUrl={item.imageUrl}
            itemName={item.itemName}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;