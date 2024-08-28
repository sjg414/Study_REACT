import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <img className="product-img" src={item?.img} alt="img" />
      <div className="choice-new">
        {item?.choice === true ? "Consious choice" : " "}
      </div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="choice-new">{item?.new === true ? "신제품" : " "}</div>
    </div>
  );
};

export default ProductCard;
