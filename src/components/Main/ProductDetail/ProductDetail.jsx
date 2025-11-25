import React from "react";
import { useParams, useLocation } from "react-router-dom";

// http://localhost:5173/product/3
// http://localhost:5173/product/55
// http://localhost:5173/product/:id
// http://localhost:5173/product/:id?page=2&sort=asc
// http://localhost:5173/product/33?page=2&sort=asc
// http://localhost:5173/product/33
// http://localhost:5173/product/33?page=2
// http://localhost:5173/product/33?sort=asc
// id variable: 1, 3, 55, etc...
const ProductDetail = () => {
  const { id } = useParams(); // params
  const location = useLocation(); // URL

  // Parsear query params manualmente
  // Query params
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const sort = searchParams.get("sort");

  return (
    <div>
      {id ? (
        <>
          <h1>Detalle del Producto</h1>
          <p>ID: {id}</p>
          <p>Página: {page}</p>
          <p>Orden: {sort}</p>
        </>
      ) : (
        <p>renderizando todos los productos</p>
      )}
    </div>
  );
};

export default ProductDetail;
