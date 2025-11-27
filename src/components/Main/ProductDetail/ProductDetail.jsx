import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";


// http://localhost:5173/product/3
// http://localhost:5173/product/9
// http://localhost:5173/product/:id
// http://localhost:5173/product/:id?limit=2&sort=asc
// http://localhost:5173/product/limit=2&sort=asc
// http://localhost:5173/product/3
// http://localhost:5173/product/2
// http://localhost:5173/product/1
// id variable: 1, 3, 55, etc...
const ProductDetail = () => {
  const { id } = useParams(); // params
  const location = useLocation(); // URL

  const [product, setProduct] = useState(null);

  // Parsear query params manualmente
  // Query params
  const searchParams = new URLSearchParams(location.search);
  const limit = searchParams.get("limit"); // limit
  const sort = searchParams.get("sort"); // asc/desc

  // useEffect para obtener datos de la API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = id
          ? `https://fakestoreapi.com/products/${id}`
          : `https://fakestoreapi.com/products?sort=${sort || "asc"}&limit=${limit}`;
        const { data } = await axios.get(url);
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id, limit, sort]); // detecta un cambio en params,query params
  
  const renderOneProduct = () => {
    // Renderiza un único producto
    if (!product) return <InfinitySpin width="200" color="#4fa94d" />;

    return (
      <>
        <h1>Detalle del Producto</h1>
        <p>ID: {product.id}</p>
        <p>Nombre: {product.title}</p>
        <p>Descripción: {product.description}</p>
        <p>Precio: ${product.price}</p>
        <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      </>
    );
  };

  const renderAllProducts = () => {
    // Renderiza todos los productos
    if (!product) return <InfinitySpin width="200" color="#4fa94d" />;

    return (
      <>
        <h1>Todos los Productos</h1>
        <ul>
          {product.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div>
      {id ? renderOneProduct() : renderAllProducts()}
    </div>
  );
};

export default ProductDetail;
