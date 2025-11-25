import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import About from "./About/About";
import ChristmasList from "./ChristmasList";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";
import Staff from "./Staff";
import Topic from "./Topic";
import WishList from "./WishList";

const Main = () => {
  // http://localhost:5173/about
  // http://localhost:5173/christmaslist
  // http://localhost:5173/product/3
  // http://localhost:5173/product/55
  // http://localhost:5173/producdetail?order=asc&limit=3
  return (

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/christmaslist" element={<ChristmasList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id?" element={<ProductDetail />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/topic" element={ <Topic />} />
        <Route path="/wishlist" element={ <WishList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
