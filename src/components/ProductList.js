// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import {useState} from "react";

const [query, setQuery] = useState(" ");

const Search = () => {
     query = products.filter((product) => (
      <ProductItem product = {product} key = {product.id}/>
  ));
  if (query){
    setQuery(query);
  }
}

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
