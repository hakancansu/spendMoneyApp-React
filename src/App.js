import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";
import Basket from "./components/Basket";
import './App.css';

function App() {
  const [money, setMoney] = useState(17500000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce(
        (toplam, bask) =>
          (toplam =
            toplam +
            bask.count *
              products.find((product) => bask.id === product.id).price),
        0
      )
    );
    
  }, [basket]);

  // const resetBasket = () => {
  //   setBasket([]);
  // };

  return (
    <div>
      <Header total={total} money={money}></Header>
      <div className="container products">
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
          money={money}
          total={total}
        ></Product>
      ))}
      </div>
    
      <Basket products={products} basket={basket} total={total}></Basket>
      
      
    </div>
  );
}

export default App;
