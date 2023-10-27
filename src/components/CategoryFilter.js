import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryFilter }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => onCategoryFilter("All")}
      >
        All
      </button>
      {categories.map((category, index) => {
        if (category !== "All") {
          return (
            <button
              key={index}
              className={category === selectedCategory ? "selected" : ""}
              onClick={() => onCategoryFilter(category)}
            >
              {category}
            </button>
          );
        }
        return null; // Exclude "All" from rendering
      })}
    </div>
  );
}

export default CategoryFilter;
