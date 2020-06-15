import React, { useState } from "react";
import { Products, Compare, Search } from "./components/";
import products from "./dummy/products.json";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [compare_product, setCompare_product] = useState([]);

  //setting the new products added to the compare list
  const set_the_products = (product) => {
    if (compare_product.find((el) => el.id === product.id)) {
      console.log("The product is already in the compare list.");
    } else {
      setCompare_product([...compare_product, product]);
    }
  };

  //removing the products from compare list
  const remove_compare_product = (id) => {
    const updated_product = compare_product.filter((el) => el.id !== id);
    setCompare_product(updated_product);
  };

  //state for the searched product lists
  const [found_product, setFound_product] = useState([]);

  //searching the products from the list
  const searched_key = (keyword) => {
    const found_products = products.filter((el) => {
      if (el.title.toLowerCase().includes(keyword)) {
        return el;
      }
      return null;
    });
    //setting the products to the state
    setFound_product(found_products);
  };

  return (
    <>
      <div className="container">
        <Search searched_key={searched_key} found_product={found_product} />
        <Products compare={set_the_products} />
        <Compare
          remove_product={remove_compare_product}
          products={compare_product}
        />
      </div>
    </>
  );
};

export default App;
