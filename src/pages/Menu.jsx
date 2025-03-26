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
  { id: 'calzone', name: 'CALZONES', color: 'secondary' },
  { id: 'food', name: 'FOOD MENU', color: 'secondary' },
  { id: 'lunch', name: 'LUNCH SPECIALS', color: 'secondary' },
  { id: 'desserts', name: 'DESSERTS', color: 'secondary' },
  { id: 'delivery', name: 'DELIVERY SPECIALS', color: 'secondary' }
];

const menuData = {
  pizza: {
    buildYourOwn: {
      title: "BUILD YOUR OWN PIZZA",
      description: "Thin crust - Extra $2.00 (Only available for Small 10\" and Large 14\" pizzas). Try our tasty garlic dipping sauce $1.00",
      items: [
        { 
          name: "Small 10\"", 
          price: 9.99,
          description: "4 slices • 190 cal/slice",
          toppingPrice: 1.25
        },
        { 
          name: "Medium 12\"", 
          price: 11.99,
          description: "8 slices • 200 cal/slice",
          toppingPrice: 1.50
        },
        { 
          name: "Large 14\"", 
          price: 13.99,
          description: "8 slices • 210 cal/slice",
          toppingPrice: 1.75
        },
        { 
          name: "X-Large 16\"", 
          price: 15.99,
          description: "8 slices • 220 cal/slice",
          toppingPrice: 1.99
        },
        { 
          name: "Party Size 20\"", 
          price: 20.99,
          description: "12 slices • 240 cal/slice",
          toppingPrice: 2.25
        }
      ]
    },
    toppings: {
      title: "AVAILABLE TOPPINGS",
      sections: [
        {
          title: "MEAT TOPPINGS",
          items: [
            { name: "Pepperoni", calories: "20-40 cal" },
            { name: "Sausage", calories: "25-35 cal" },
            { name: "Chicken", calories: "10-15 cal" },
            { name: "Buffalo Chicken", calories: "15-20 cal" },
            { name: "BBQ Chicken", calories: "10-15 cal" },
            { name: "Beef", calories: "15-25 cal" },
            { name: "Turkey Ham", calories: "10-15 cal" },
            { name: "Sliced Meatballs", calories: "40-45 cal" },
            { name: "Sliced Gyro", calories: "20 cal" }
          ]
        },
        {
          title: "VEGETABLE & CHEESE TOPPINGS",
          items: [
            { name: "Black Olives", calories: "15-20 cal" },
            { name: "Basil", calories: "0 cal" },
            { name: "Banana Peppers", calories: "0 cal" },
            { name: "Green Peppers", calories: "0 cal" },
            { name: "Green Olives", calories: "10-15 cal" },
            { name: "Jalapeno Peppers", calories: "0 cal" },
            { name: "Onions", calories: "0 cal" },
            { name: "Mushrooms", calories: "0 cal" },
            { name: "Pineapple", calories: "10 cal" },
            { name: "Spinach", calories: "0 cal" },
            { name: "Tomatoes", calories: "0 cal" },
            { name: "Garlic", calories: "0 cal" },
            { name: "Mozzarella Cheese", calories: "0 cal" },
            { name: "Feta Cheese", calories: "0 cal" },
            { name: "Parmesan Cheese", calories: "0 cal" },
            { name: "Ricotta Cheese", calories: "0 cal" },
            { name: "Cheddar Cheese", calories: "0 cal" }
          ]
        }
      ]
    },
    gourmet: {
      title: "GOURMET PIZZA'S",
      items: [
        {
          name: "HOUSE PIZZA",
          description: "PIZZA SAUCE, MOZZARELLA CHEESE, PEPPERONI, SAUSAGE AND MUSHROOM.",
          calories: "260-350 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "SUPREME PIZZA",
          description: "PIZZA SAUCE & CHEESE TOPPED WITH PEPPERONI, SAUSAGE, MUSHROOM, GREEN PEPPER & ONION.",
          calories: "240-290 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "MEAT LOVERS PIZZA",
          description: "PIZZA SAUCE & CHEESE TOPPED WITH PEPPERONI, SAUSAGE, TURKEY HAM AND BEEF.",
          calories: "320-340 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "CHICKEN RANCHER PIZZA",
          description: "CHICKEN, TOMATOES & RANCH DRESSING WITH MOZZARELLA & PARMESAN CHEESE.",
          calories: "230-290 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "MARGHERITA PIZZA",
          description: "PIZZA SAUCE AND CHEESE TOPPED WITH SLICES TOMATOES, FRESH GARLIC, FRESH BASIL LEAVES AND FRESH MOZZARELLA CHEESE.",
          calories: "200-300 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "BARBEQUE CHICKEN PIZZA",
          description: "BARBEQUE SAUCE, MOZZARELLA CHEESE, CHICKEN, GREEN PEPPER, ONION & CHEDDAR CHEESE.",
          calories: "210-290 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "SPINACH AND CHICKEN PIZZA",
          description: "PIZZA SAUCE, SPINACH, CHICKEN, MOZZARELLA CHEESE.",
          calories: "225-240 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "GREEK PIZZA",
          description: "MADE WITH OLIVE OIL, MOZZARELLA CHEESE, TOMATOES, GREEN OLIVES, BLACK OLIVES, GREEN PEPPER, ONION AND FETA CHEESE.",
          calories: "220-250 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "WHITE PIZZA",
          description: "OLIVE OIL, MOZZARELLA CHEESE, PARMESAN & RICOTTA CHEESE.",
          calories: "240-280 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "VEGGIE PIZZA",
          description: "PIZZA SAUCE & MOZZARELLA CHEESE TOPPED WITH GREEN PEPPER, ONION, MUSHROOM, TOMATO & BLACK OLIVES.",
          calories: "190-230 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "HAWAIIAN PIZZA",
          description: "PIZZA SAUCE, PINEAPPLE, TURKEY HAM & MOZZARELLA CHEESE.",
          calories: "220-260 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "PEPPERONI LOVERS PIZZA",
          description: "DOUBLED PORTION OF PEPPERONI WITH LOADS OF MOZZARELLA CHEESE.",
          calories: "240-290 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "CHEESELOVERS PIZZA",
          description: "PIZZA SAUCE TOPPED WITH MOZZARELLA CHEESE, CHEDDAR CHEESE, RICOTTA CHEESE, PARMESAN CHEESE AND FETA CHEESE.",
          calories: "250-280 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "BUFFALO CHICKEN PIZZA",
          description: "CHICKEN, BUFFALO SAUCE, JALAPENOS, MOZZARELLA CHEESE AND CHEDDAR CHEESE.",
          calories: "220-260 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        },
        {
          name: "GYRO PIZZA",
          description: "PIZZA SAUCE, GYRO MEAT, BLACK OLIVES, ONION, FETA CHEESE AND MOZZARELLA CHEESE.",
          calories: "240-280 CAL",
          prices: {
            small: 12.99,
            medium: 14.99,
            large: 17.99,
            xlarge: 19.99,
            party: 25.99
          }
        }
      ]
    }
  },
  calzone: {
    title: "HOUSE CALZONES",
    description: "You may order any of our pizza toppings in your calzone. Calzone includes ricotta cheese and served with sauce on the side.",
    items: [
      { 
        name: "Small Calzone", 
        price: 13.99, 
        image: calzoneImg 
      },
      { 
        name: "Medium Calzone", 
        price: 15.99 
      },
      { 
        name: "Large Calzone", 
        price: 18.99 
      }
    ],
    toppings: {
      title: "AVAILABLE TOPPINGS",
      sections: [
        {
          title: "MEAT TOPPINGS",
          items: [
            { name: "Pepperoni", calories: "20-40 cal" },
            { name: "Sausage", calories: "25-35 cal" },
            { name: "Chicken", calories: "10-15 cal" },
            { name: "Buffalo Chicken", calories: "15-20 cal" },
            { name: "BBQ Chicken", calories: "10-15 cal" },
            { name: "Beef", calories: "15-25 cal" },
            { name: "Turkey Ham", calories: "10-15 cal" },
            { name: "Sliced Meatballs", calories: "40-45 cal" },
            { name: "Sliced Gyro", calories: "20 cal" }
          ]
        },
        {
          title: "VEGETABLE & CHEESE TOPPINGS",
          items: [
            { name: "Black Olives", calories: "15-20 cal" },
            { name: "Basil", calories: "0 cal" },
            { name: "Banana Peppers", calories: "0 cal" },
            { name: "Green Peppers", calories: "0 cal" },
            { name: "Green Olives", calories: "10-15 cal" },
            { name: "Jalapeno Peppers", calories: "0 cal" },
            { name: "Onions", calories: "0 cal" },
            { name: "Mushrooms", calories: "0 cal" },
            { name: "Pineapple", calories: "10 cal" },
            { name: "Spinach", calories: "0 cal" },
            { name: "Tomatoes", calories: "0 cal" },
            { name: "Garlic", calories: "0 cal" },
            { name: "Mozzarella Cheese", calories: "0 cal" },
            { name: "Feta Cheese", calories: "0 cal" },
            { name: "Parmesan Cheese", calories: "0 cal" },
            { name: "Ricotta Cheese", calories: "0 cal" },
            { name: "Cheddar Cheese", calories: "0 cal" }
          ]
        }
      ]
    }
  },
  food: {
    appetizers: {
      title: "HOUSE APPETIZERS",
      description: "Extra side of sauce $1.00",
      items: [
        { 
          name: "Mozzarella Sticks (6 PCS)", 
          price: 7.99
        },
        { 
          name: "Chicken Tenders (3 PCS)", 
          price: 7.99,
          description: "Served with honey mustard"
        },
        { 
          name: "Breadsticks (8 PCS)", 
          price: 6.99,
          description: "Freshly baked breadsticks accompanied by a side of tangy marinara dipping sauce."
        },
        { 
          name: "Cheese Breadsticks", 
          price: 8.99,
          description: "Golden-brown breadsticks oozing with melted cheese, perfect for indulging in every cheesy bite."
        },
        { 
          name: "Pepperoni Topped Cheese Breadsticks", 
          price: 10.99,
          description: "Savory breadsticks generously layered with gooey melted cheese and topped with pepperoni."
        },
        { 
          name: "Wedge Fries", 
          price: 6.99
        }
      ]
    },
    wings: {
      title: "HOUSE WING DITTIES",
      description: "Comes with ranch on the side. Extra side of dressing $1.00. Available in Plain, Mild, Hot, Lemon Pepper, Garlic Parm, BBQ, Honey Hot",
      items: [
        { name: "6 PCS Baked Wings", price: 9.99 },
        { name: "12 PCS Baked Wings", price: 18.99 },
        { name: "24 PCS Baked Wings", price: 35.99 }
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
    },
    salads: {
      title: "SALADS",
      items: [
        { 
          name: "Small House Salad", 
          price: 5.99,
          description: "Lettuce, cherry tomatoes, cucumber topped with cheddar cheese, & black olives. Served with your choice of dressing."
        },
        { 
          name: "House Salad", 
          price: 7.99, 
          image: houseSalad,
          description: "Lettuce, cherry tomatoes, cucumber topped with cheddar cheese, & black olives. Served with your choice of dressing."
        },
        { 
          name: "Caesar Salad", 
          price: 7.99,
          description: "Romaine lettuce and croutons dressed with parmesan cheese."
        },
        { 
          name: "Grilled Chicken Caesar", 
          price: 9.99,
          description: "Grilled chicken, romaine lettuce and croutons dressed with parmesan cheese."
        },
        { 
          name: "Grilled Chicken Salad", 
          price: 9.99,
          description: "Grilled chicken, lettuce, cherry tomatoes, cucumber topped with cheddar cheese, & black olives. Served with your choice of dressing."
        },
        { 
          name: "Gyro Salad", 
          price: 9.99,
          description: "Gyro meat, lettuce, cherry tomatoes, cucumber topped with feta cheese, & black olives. Served with your choice of dressing."
        },
        { 
          name: "Greek Salad", 
          price: 9.99,
          description: "Black olives and green olives with cucumbers, feta cheese, cherry tomatoes and lettuce."
        }
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
    }
  },
  lunch: {
    title: "LUNCH SPECIALS",
    subtitle: "Monday - Friday FROM 10AM TO 2PM ONLY",
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
  },
  delivery: {
    title: "DELIVERY SPECIALS",
    description: "ALL SPECIALS LIMITED-TIME OFFER. COUPONS CAN NOT BE COMBINED",
    items: [
      {
        name: "CARRY OUT SPECIAL",
        description: "1 LARGE PIZZA WITH 2 TOPPINGS",
        price: 12.99,
        type: "carry-out"
      },
      {
        name: "DELIVERY SPECIAL #1",
        description: "1 LARGE PIZZA WITH 1 TOPPING + 6 PCS. WINGS + 2L SODA",
        price: 26.99,
        type: "delivery"
      },
      {
        name: "DELIVERY SPECIAL #2",
        description: "3 ANY HOUSE SUBS + 3 CHIPS + 3 CAN SODAS",
        price: 26.99,
        type: "delivery"
      },
      {
        name: "DELIVERY SPECIAL #3",
        description: "2 LARGE PIZZA WITH 2 TOPPINGS",
        price: 29.99,
        type: "delivery"
      },
      {
        name: "DELIVERY SPECIAL #4",
        description: "1 ANY HOUSE LARGE GOURMET PIZZA + 1 LARGE CHEESE PIZZA + 2L SODA",
        price: 31.99,
        type: "delivery"
      },
      {
        name: "DELIVERY SPECIAL #5",
        description: "2 ANY XL HOUSE LARGE GOURMET PIZZA + 12 PCS. WINGS + TWO 2L SODAS",
        price: 58.99,
        type: "delivery"
      }
    ]
  }
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizza');
  const [showAllGourmet, setShowAllGourmet] = useState(false);

  const renderMenuSection = (section) => {
    if (section.title === "GOURMET PIZZA'S") {
      const displayedItems = showAllGourmet ? section.items : section.items.slice(0, 5);
      
      return (
        <div className="menu-card">
          <h2>{section.title}</h2>
          {section.description && <p className="section-description">{section.description}</p>}
          {displayedItems.map((item, index) => (
            <div key={index} className={`menu-item ${item.type || ''}`}>
              <div className="item-header">
                <h3>{item.name}</h3>
                {item.prices ? (
                  <div className="price-list">
                    <div className="price-row">
                      <span className="price">S: ${item.prices.small}</span>
                      <span className="price">M: ${item.prices.medium}</span>
                      <span className="price">L: ${item.prices.large}</span>
                    </div>
                    <div className="price-row">
                      <span className="price">XL: ${item.prices.xlarge}</span>
                      <span className="price">Party: ${item.prices.party}</span>
                    </div>
                  </div>
                ) : (
                  <span className="price">${item.price.toFixed(2)}</span>
                )}
              </div>
              {item.description && <p className="description">{item.description}</p>}
              {item.calories && <p className="calories">{item.calories}</p>}
              {item.toppingPrice && (
                <p className="topping-price">Toppings: ${item.toppingPrice.toFixed(2)} each</p>
              )}
              {item.image && (
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
              )}
            </div>
          ))}
          {section.items.length > 5 && (
            <button 
              className="view-all-btn"
              onClick={() => setShowAllGourmet(!showAllGourmet)}
            >
              {showAllGourmet ? 'Show Less' : 'View All Gourmet Pizzas'}
            </button>
          )}
        </div>
      );
    }

    return (
      <div className="menu-card">
        <h2>{section.title}</h2>
        {section.subtitle && <p className="section-subtitle">{section.subtitle}</p>}
        {section.description && <p className="section-description">{section.description}</p>}
        {section.sections ? (
          // Render toppings sections
          section.sections.map((subsection, idx) => (
            <div key={idx} className="toppings-section">
              <h3 className="toppings-title">{subsection.title}</h3>
              <div className="toppings-grid">
                {subsection.items.map((item, index) => (
                  <div key={index} className="topping-item">
                    <span className="topping-name">{item.name}</span>
                    <span className="topping-calories">{item.calories}</span>
                    {item.note && <span className="topping-note">*{item.note}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          // Render menu items
          section.items.map((item, index) => (
            <div key={index} className={`menu-item ${item.type || ''}`}>
              <div className="item-header">
                <h3>{item.name}</h3>
                {item.prices ? (
                  <div className="price-list">
                    <div className="price-row">
                      <span className="price">S: ${item.prices.small}</span>
                      <span className="price">M: ${item.prices.medium}</span>
                      <span className="price">L: ${item.prices.large}</span>
                    </div>
                    <div className="price-row">
                      <span className="price">XL: ${item.prices.xlarge}</span>
                      <span className="price">Party: ${item.prices.party}</span>
                    </div>
                  </div>
                ) : (
                  <span className="price">${item.price.toFixed(2)}</span>
                )}
              </div>
              {item.description && <p className="description">{item.description}</p>}
              {item.calories && <p className="calories">{item.calories}</p>}
              {item.toppingPrice && (
                <p className="topping-price">Toppings: ${item.toppingPrice.toFixed(2)} each</p>
              )}
              {item.image && (
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    );
  };

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'pizza':
        return (
          <div className="menu-sections-container">
            <div className="menu-sections-grid">
              {renderMenuSection(menuData.pizza.buildYourOwn)}
              {renderMenuSection(menuData.pizza.gourmet)}
            </div>
            <div className="menu-section-full">
              {renderMenuSection(menuData.pizza.toppings)}
            </div>
          </div>
        );
      case 'calzone':
        return (
          <div className="menu-sections-container">
            <div className="menu-sections-grid">
              {renderMenuSection(menuData.calzone)}
            </div>
            <div className="menu-section-full">
              {renderMenuSection(menuData.calzone.toppings)}
            </div>
          </div>
        );
      case 'food':
        return (
          <>
            {renderMenuSection(menuData.food.appetizers)}
            {renderMenuSection(menuData.food.wings)}
            {renderMenuSection(menuData.food.subs)}
            {renderMenuSection(menuData.food.salads)}
            {renderMenuSection(menuData.food.pasta)}
          </>
        );
      case 'lunch':
        return renderMenuSection(menuData.lunch);
      case 'desserts':
        return renderMenuSection(menuData.desserts);
      case 'delivery':
        return renderMenuSection(menuData.delivery);
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
              className={`category-btn ${activeCategory === category.id ? 'active' : 'secondary'}`}
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
