"use client";

export default function MenuCategories({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="menu-categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={
            activeCategory === category
              ? "category-btn active"
              : "category-btn"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}