import React from "react";
import { useSearchParams } from "react-router-dom"; //url의 쿼리값을 가져오는 함수

const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log("searchParams", query.get("q"));
  return (
    <div>
      <h1>Show All Products!!</h1>
    </div>
  );
};

export default ProductPage;
