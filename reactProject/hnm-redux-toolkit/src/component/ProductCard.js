import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDeatil = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-area" onClick={goToDeatil}>
      <div>
        <img width={270} src={item?.img} alt="" />
      </div>
      <div>
        <p>{item?.choice === true ? "conscious choice" : ""}</p>
      </div>
      <div>
        <p>{item?.title}</p>
      </div>
      <div>
        <p>₩{item?.price}</p>
      </div>
      <div>
        <p>{item?.new === true ? "신제품" : ""}</p>
      </div>
    </div>
  );
};

export default ProductCard;
