import { useState } from "react";
import { Product, Props } from "./Productdetail";

export function Basket({ inBasket, setInBasket }: Props) {
  const [total, setTotal] = useState(0);

  let totalCopy = structuredClone(total);

  inBasket.map((item: Product) => (totalCopy += item.price));

  setTotal(totalCopy);

  return (
    <section className="basket-container">
      <h2>Your Basket</h2>
      <ul>
        {inBasket?.map((item, index) => (
          <li key={index}>
            <article className="basket-container__item">
              <img src={item.image} alt={item.title} width="90" />
              <p>{item.title}</p>

              <p>
                Qty:
                <select>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </p>
              <p>Item total:{item.price}$</p>
            </article>
          </li>
        ))}
      </ul>

      <h3>Your total:{total}</h3>
    </section>
  );
}
