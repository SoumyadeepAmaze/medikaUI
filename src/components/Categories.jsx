import React from "react";
import equipments from "../assets/equipments.jpg";
import consumables from "../assets/consumables.jpg";
import arrowright from "../assets/arrowright.png";

function Categories() {
  const categories = [
    {
      image: equipments,
      title: "Equipments",
    },
    {
      image: consumables,
      title: "Consumables",
    },
  ];

  return (
    <div className="categories-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Categories</h2>
          <h3 className="see-all">see all <img src={arrowright} alt="arrow-right" className="arrow-right"/></h3>
        </div>
        <div className="categories">
          {categories.map(({ image, title }, index) => {
            return (
              <div className="category" key={index}>
                <h4>{title}</h4>
                <img src={image} alt="Category" />
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
