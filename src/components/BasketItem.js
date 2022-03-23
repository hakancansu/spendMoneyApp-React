import React from "react";

function BasketItem({ item, product }) {
  return (
    <div>
      <li className="basket-item">
        {product.title} x {item.count}
      </li>

      <style jsx>{`
        .basket-item {
          padding-bottom: 10px;
          font-size: 17px;
        }

        .basket-item span {
          color: #999;
        }
      `}</style>
    </div>
  );
}

export default BasketItem;
