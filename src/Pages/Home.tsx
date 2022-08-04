import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Home() {
  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    categoryId: number;
    image: string;
  };
  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((resp) => resp.json())
      .then((productsFromSerer) => setProducts(productsFromSerer));
  }, []);

  const [products, setProducts] = useState<Product[]>();
  return (
    <ul className="products-container__list">
      {products?.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>
            <article className="product-item">
              <img
                src= {product.image}
                alt={product.description}
              />
              <h3>{product.title}</h3>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
