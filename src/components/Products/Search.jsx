import React from "react";

const Search = (props) => {
  const { searched_key, found_product } = props;

  //handling the onchange of the input search
  const searchInput = (e) => {
    searched_key(e.target.value);
  };

  //display the search results
  const render_search_results = () => {
    return found_product.length < 1 ? (
      <p className="lead">No search results found.</p>
    ) : (
      <ul style={{ listStye: "none" }}>
        {found_product.map((product, index) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="clearfix">
      <div className="float-right">
        <h2>Search Here:</h2>
        <input
          type="text"
          name="q"
          id="q"
          onChange={searchInput}
          placeholder="Search Here..."
        />
        {render_search_results()}
      </div>
    </div>
  );
};

export default Search;
