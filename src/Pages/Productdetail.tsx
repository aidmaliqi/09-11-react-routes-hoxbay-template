import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Productdetail() {
  const params = useParams();
  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    categoryId: number;
    image: string;
  };
  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.id}`)
      .then((resp) => resp.json())
      .then((productsFromSerer) => setProduct(productsFromSerer));
  }, []);

  const [product, setProduct] = useState<Product>();
  return (
    <section className="product-detail main-wrapper">
      <img src={product?.image} alt={product?.description} />
      <div className="product-detail__side">
        <h3></h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>{product?.price}$</p>
        {/*<!-- Once you click in this button, the user should be redirected to the Basket page -->*/}
        <button>Add to basket</button>
      </div>
    </section>
  );
}
