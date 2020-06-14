import React, { useState } from "react";
import { Products, Compare } from "./components/";

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

  return (
    <>
      <div className="container">
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
