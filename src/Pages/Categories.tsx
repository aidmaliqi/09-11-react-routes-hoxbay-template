import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Categories() {
  type Categorie = {
    id: number;
    name: string;
  };
  const [categories, setCategories] = useState<Categorie[]>();

  useEffect(() => {
    fetch(`http://localhost:4000/categories`)
      .then((resp) => resp.json())
      .then((categoriesFromSerer) => setCategories(categoriesFromSerer));
  }, []);

  return (
    <section className="categories-container main-wrapper">
      <ul className="categories-container__list">
        {categories?.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
