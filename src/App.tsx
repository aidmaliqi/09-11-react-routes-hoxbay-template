import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Basket } from "./Pages/Basket";
import { Categories } from "./Pages/Categories";
import { Home } from "./Pages/Home";
import { Productdetail } from "./Pages/Productdetail";
import { Product } from "./Pages/Productdetail";

type Categorie = {
  id: number;
  name: string;
};

function App() {
  const [categories, setCategories] = useState<Categorie[]>();
  const [inBasket, setInBasket] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/basket`)
      .then((resp) => resp.json())
      .then((productsFromSerer) => setInBasket(productsFromSerer));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:4000/categories`)
      .then((resp) => resp.json())
      .then((categoriesFromSerer) => setCategories(categoriesFromSerer));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/products" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/products/:id"
            element={
              <Productdetail inBasket={inBasket} setInBasket={setInBasket} />
            }
          />
          <Route
            path="/basket"
            element={<Basket inBasket={inBasket} setInBasket={setInBasket} />}
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
