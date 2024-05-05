import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import ProductCard from "../../components/ProductCard";
import { toggleBrand, toggleStock } from "../../redux/actions/filterActions";
import loadProductData from "../../redux/thunk/products/fetchProducts";

const Home = () => {
  const filters = useSelector((state) => state.filter.filters);
  const { brands, stock } = filters;
  const dispatch = useDispatch();
  const [items,setItems]=useState([])

  useEffect(() => {
    fetch("product.json")
    .then(res =>res.json())
    .then(data => setItems(data))
    
  },[]);

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {
          items.map(item =><Card
          key={item.id}
          item={item}
          ></Card>)
        }
      </div>
    </div>
  );
};

export default Home;
