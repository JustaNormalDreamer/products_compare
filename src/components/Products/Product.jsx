import React from "react";

const Product = (props) => {
  const {
    product: { id, title },
  } = props;

  return (
    <div className="col-md-4">
      <div className="card m-2 p-2 text-center">
        <div className="card-body">
          <h3 className="">{title}</h3>
          <button className="btn btn-primary" onClick={() => props.clicked(id)}>
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
