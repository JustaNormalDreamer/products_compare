import React from "react";
import { render } from "@testing-library/react";

const Compare = (props) => {
  const { products } = props;

  const render_features = (product_feature) => {
    console.log(product_feature);
    return (
      <>
        {product_feature.map((f, i) => (
          <tr key={f.id}>
            <th>{f.title}</th>
            <td>{f.body}</td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            {/* <th>#</th> */}
            {products.map((product, index) => (
              <th key={product.id}>{product.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <>
              <td>{render_features(product.features)}</td>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Compare;
