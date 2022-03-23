import React, { useState } from "react";

function Product({ product, basket, setBasket, total, money }) {
  const basketItem = basket.find((bask) => bask.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    // ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.count += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          count: 1,
        },
      ]);
    }
  };

  const decrase = () => {
    const checkBasket = basket.find((bask) => bask.id === product.id);
    if (checkBasket.count > 0) {
      checkBasket.count -= 1;
      setBasket([
        ...basket.filter((bask) => bask.id !== product.id),
        checkBasket,
      ]);
    }
  };

  const removeFromBask = () => {
    if (true) {
      setBasket([...basket.filter((bask) => bask.id !== product.id)]);
    }
  };

  return (
    <div className="product">
      <img src={product.image} alt=""/>
      <h6>{product.title}</h6>
      <div className="price">${product.price}</div>
      <div className="actions">
        <button className="sell-btn" disabled={!basketItem} onClick={decrase}>
          sat
        </button>
        <button className="amount">
          {(basketItem && basketItem.count) || 0}
        </button>
        <button
          className="buy-btn"
          disabled={total + product.price > money}
          onClick={addBasket}
        >
          satın al
        </button>
      </div>

      <style jsx>{`
        .product {
          padding: 15px;
          background: #fff;
          border: 1px solid #ddd;
          margin-bottom: 20px;
          width: 24%;
        }

        .product img {
          width: 100%;
        }

        .product h6 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .product .price {
          font-size: 20px;
          color: #179b17;
        }

        .product .actions {
          display: flex;
          align-items: center;
          margin-top: 15px;
        }

        .actions button {
          height: 40px;
          padding: 0 15px;
          flex: 1;
          cursor: pointer;
        }

        .actions button[disabled] {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .actions .buy-btn {
          background: #61dafb;
          font-size: 14px;
          font-weight: 500;
          border-radius: 0 4px 4px 0;
        }

        .actions .sell-btn {
          background: #ccc;
          font-size: 14px;
          color: #333;
          font-weight: 500;
          border-radius: 4px 0 0 4px;
        }

        .actions .amount {
          width: 50px;
          text-align: center;
          border: 1px solid #ddd;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          font-weight: bold;
          color: #555;
        }
      `}</style>
    </div>
  );
}

export default Product;
