import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Layout} from "../components";
import {MainPage, DetailPage} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
