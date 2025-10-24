import Category from "./Category";
export default function CategoryList({ categories, onChoseCategory }) {
  return (
    <>
      {categories.map((category, index) => (
        <Category
          key={index}
          value={category.value}
          onChoseCategory={onChoseCategory}
        >
          {category.label}
        </Category>
      ))}
    </>
  );
}
