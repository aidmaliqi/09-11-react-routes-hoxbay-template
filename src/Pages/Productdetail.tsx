import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export type Props = {
  inBasket: Product[];
  setInBasket: Function;
};

export function Productdetail({ inBasket, setInBasket }: Props) {
  const params = useParams();

  function addToBasket(item: Product) {
    const basketClone = structuredClone(inBasket);

    basketClone.push(item);

    fetch(`http://localhost:4000/basket`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(item),
    });

    setInBasket(basketClone);
  }

  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.id}`)
      .then((resp) => resp.json())
      .then((productsFromSerer) => setProduct(productsFromSerer));
  }, []);


  const [product, setProduct] = useState<Product>(null!);

  console.log(inBasket);
  return (
    <section className="product-detail main-wrapper">
      <img src={product?.image} alt={product?.description} />
      <div className="product-detail__side">
        <h3></h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>{product?.price}$</p>
        {/*<!-- Once you click in this button, the user should be redirected to the Basket page -->*/}
        <Link to="/basket">
          <button onClick={() => addToBasket(product)}>Add to basket</button>
        </Link>
      </div>
    </section>
  );
}
