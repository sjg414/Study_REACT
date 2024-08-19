import React from "react";
import { useParams } from "react-router";

const ProductDetailPage = () => {
  const { id } = useParams(); //url의 파라미터 값을 읽어오는 함수

  return (
    <div>
      <h1>Show Product Detail {id}</h1>
    </div>
  );
};

export default ProductDetailPage;
