import React from "react";
import menuItems from "../menuItems";

const Menu = () => {
    const handleOrder = (title) => {
        alert("Your order of " + title + " will soon arrive!");
    };

    return (
        <div className="menu-container">
          <div className="menu-header">
            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
          </div>
          <div className="cards">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-items">
                <img src={item.image} alt="" />
                <div className="menu-content">
                  <div className="heading">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                  </div>
                  <p>{item.description}</p>
                  <button className="orderbtn" onClick={() => handleOrder(item.title)}>Order a delivery</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Menu;