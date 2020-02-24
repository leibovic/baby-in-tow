import React, { useCallback } from "react";

function CategoryPicker({ category, handleCategoryChange }) {
  const changeHandler = useCallback(
    e => {
      handleCategoryChange(e.target.value);
    },
    [handleCategoryChange]
  );

  return (
    <select
      className="categorySelect"
      value={category}
      onChange={changeHandler}
      onBlur={changeHandler}
    >
      <option value="">All Categories</option>
      <option value="Eats">Eats</option>
      <option value="Culture">Culture</option>
      <option value="Community">Community</option>
      <option value="Self Care">Self Care</option>
    </select>
  );
}

export default CategoryPicker;
