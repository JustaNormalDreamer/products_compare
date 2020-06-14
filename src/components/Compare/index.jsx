import React from "react";

const Compare = (props) => {
  const { products } = props;

  const render_features = (product_feature) => {
    //sorting the features
    product_feature.sort((a, b) => (a.title > b.title ? 1 : -1));
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
              <th key={product.id}>
                {product.title}
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => props.remove_product(product.id)}
                >
                  X
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <td key={product.id}>{render_features(product.features)}</td>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Compare;
