import React, { Component } from "react";
import Product from "./Product";

import products from "../../dummy/products.json";

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({
      products,
    });
  }

  compareHandler = (id) => {
    const product = this.state.products.find((el) => el.id === id);
    this.props.compare(product);
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <h2>Compare products</h2>
        <div className="row">
          {products.map((product, index) => (
            <Product
              key={product.id}
              clicked={this.compareHandler}
              product={product}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Products;
