import React, { useEffect, useState } from "react";
import { items } from "../assets/items";
import { useTranslation } from 'react-i18next';


export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Tourism", "PublicPark", "HolidayPark", "Education", "Sports"];
  //   let filters = ["Bags", "Watches", "Sports", "Sunglasses"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };
    const { t } = useTranslation();

  return (
  <div className="container"> 
       <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${selectedFilters?.includes(category) ? "active" : ""
              }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container ">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <div className="product-card">

              <div className="product-image">

                <img src={item.img} alt={item.name} />
                <div className="product-overlay">
                  <span onClick={() => window.open(item.link, "_blank")}>{t('products.details', 'View Details')}</span>
                </div>

              </div>
              <div className="product-info">

                <h3>{item.name}</h3>
                <p className="category">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
