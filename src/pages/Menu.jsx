import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Menu.css';
import chickenRancherSub from '../assets/PizzaHouse_ChickenRancherSub.jpg';
import calzoneImg from '../assets/PizzaHouse_Calzone.jpg';
import houseSalad from '../assets/PizzaHouse_HouseSalad.jpg';
import meatLoversPizza from '../assets/PizzaHouse_MeatloversPizza.jpg';

const menuCategories = [
  { id: 'pizza', name: 'PIZZA MENU', color: 'primary' },
  { id: 'calzone', name: 'CALZONE & STROMBOLI', color: 'secondary' },
  { id: 'food', name: 'FOOD MENU', color: 'secondary' },
  { id: 'lunch', name: 'LUNCH SPECIALS', color: 'secondary' },
  { id: 'desserts', name: 'DESSERTS', color: 'secondary' }
];

const menuData = {
  pizza: {
    buildYourOwn: {
      title: "BUILD YOUR OWN PIZZA'S",
      items: [
        { name: "Small 10\"", price: 10.33 },
        { name: "Medium 12\"", price: 12.40 },
        { name: "Large 14\"", price: 14.47 },
        { name: "XLarge 16\"", price: 16.54 },
        { name: "Party Size 20\"", price: 20.68 }
      ]
    },
    gourmet: {
      title: "GOURMET PIZZA'S",
      items: [
        { name: "Personal 10\"", price: 13.44, image: meatLoversPizza },
        { name: "Medium 12\"", price: 15.51 },
        { name: "Large 14\"", price: 18.61 },
        { name: "X-Large 16\"", price: 20.68 },
        { name: "Party Size 20\"", price: 25.86 }
      ]
    }
  },
  calzone: {
    title: "CALZONE & STROMBOLI",
    items: [
      { name: "Calzone Small", price: 14.47, image: calzoneImg },
      { name: "Calzone Medium", price: 16.54 },
      { name: "Calzone Large", price: 19.65 }
    ]
  },
  food: {
    appetizers: {
      title: "APPETIZERS",
      items: [
        { name: "Mozzarella Sticks", price: 8.26 },
        { name: "Chicken Tenders", price: 8.26 },
        { name: "Breadsticks", price: 7.23 },
        { name: "Cheese Breadsticks", price: 9.30 },
        { name: "Pepperoni Topped Cheese Breadsticks", price: 11.37 },
        { name: "Wedge Fries", price: 7.23 }
      ]
    },
    wings: {
      title: "WINGS",
      items: [
        { name: "6 PCS Baked Wings", price: 10.33 },
        { name: "12 PCS Baked Wings", price: 19.65 },
        { name: "24 PCS Baked Wings", price: 37.26 }
      ]
    },
    salads: {
      title: "SALADS",
      items: [
        { name: "Small House Salad", price: 6.19 },
        { name: "House Salad", price: 8.26, image: houseSalad },
        { name: "Caesar Salad", price: 8.26 },
        { name: "Grilled Chicken Caesar", price: 9.99 },
        { name: "Grilled Chicken Salad", price: 9.99 },
        { name: "Gyro Salad", price: 9.99 },
        { name: "Greek Salad", price: 9.99 }
      ]
    },
    pasta: {
      title: "PASTA",
      items: [
        { name: "Chicken Alfredo", price: 14.47 },
        { name: "Shrimp Alfredo", price: 14.47 },
        { name: "Chicken Parmesan", price: 14.47 },
        { name: "Spaghetti Meatballs", price: 14.47 }
      ]
    },
    subs: {
      title: "SUBS",
      items: [
        { name: "Chicken Rancher Sub", price: 9.30, image: chickenRancherSub },
        { name: "Meatball Sub", price: 9.30 },
        { name: "Chicken Parmesan Sub", price: 9.30 },
        { name: "Ham & Cheese Sub", price: 9.30 },
        { name: "Buffalo Chicken Sub", price: 9.30 },
        { name: "Gyro Sub", price: 9.30 }
      ]
    }
  },
  lunch: {
    title: "LUNCH SPECIALS",
    items: [
      { name: "Single Slice", price: 3.25 },
      { name: "2 Slice + Can Deal", price: 6.99 },
      { name: "1 Any House Sub + 1 Chips + Can Soda", price: 8.26 },
      { name: "1 ANY HOUSE SALAD + 1 CAN SODA", price: 8.26 },
      { name: "1 Small Pizza With 2 Toppings + 1 Can Soda", price: 12.40 },
      { name: "1 Small House Calzone + 1 Can Soda", price: 13.44 },
      { name: "6 Mozzarella Sticks + Any House Salad + 1 Can Soda", price: 15.51 },
      { name: "Any Pasta w/Small House Salad + 1 Can Soda", price: 18.61 }
    ]
  },
  desserts: {
    title: "DESSERTS",
    items: [
      { name: "Cheesecake", price: 5.16 },
      { name: "Chocolate Cake", price: 5.16 },
      { name: "Carrot Cake", price: 5.16 }
    ]
  }
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizza');

  const renderMenuSection = (section) => (
    <div className="menu-card">
      <h2>{section.title}</h2>
      {section.items.map((item, index) => (
        <div key={index} className="menu-item">
          <div className="item-header">
            <h3>{item.name}</h3>
            <span className="price">${item.price.toFixed(2)}</span>
          </div>
          {item.description && <p className="description">{item.description}</p>}
          {item.image && (
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'pizza':
        return (
          <>
            {renderMenuSection(menuData.pizza.buildYourOwn)}
            {renderMenuSection(menuData.pizza.gourmet)}
          </>
        );
      case 'calzone':
        return renderMenuSection(menuData.calzone);
      case 'food':
        return (
          <>
            {renderMenuSection(menuData.food.appetizers)}
            {renderMenuSection(menuData.food.wings)}
            {renderMenuSection(menuData.food.salads)}
            {renderMenuSection(menuData.food.pasta)}
            {renderMenuSection(menuData.food.subs)}
          </>
        );
      case 'lunch':
        return renderMenuSection(menuData.lunch);
      case 'desserts':
        return renderMenuSection(menuData.desserts);
      default:
        return null;
    }
  };

  return (
    <div className="menu-page">
      <Navbar isMenuPage={true} />
      <div className="menu-container">
        <h1 className="menu-title">OUR MENU</h1>
        
        <div className="category-buttons">
          {menuCategories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${category.color} ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-content">
          {renderCategoryContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
