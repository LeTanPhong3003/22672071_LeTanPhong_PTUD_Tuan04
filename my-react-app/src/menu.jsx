import React, { useState, useEffect } from 'react';
import './menu.css';

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('https://res.cloudinary.com/dqyqckhcd/raw/upload/v1741147437/qnyf1yungy1y9v9h16e2.json')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt={item.name} className="menu-image" />
            <p className="menu-name">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;