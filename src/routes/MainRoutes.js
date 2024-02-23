import React from "react";
import ProductPages from "../pages/ProductPages";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/Admin/Admin";
import Edited from "../components/EditProduct/Edited";
import NavbarFavor from "../components/Navbar/NavbarFavor";
import Registers from "../components/Register/Registers";
import SignIn from "../components/Register/SignIn";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/", element: <ProductPages />, id: 1 },
    { link: "/admin", element: <Admin />, id: 2 },
    { link: "/edit/:id", element: <Edited />, id: 3 },
    { link: "/favor", element: <NavbarFavor />, id: 4 },
    { link: "/regg", element: <Registers />, id: 5 },
    { link: "/sign", element: <SignIn />, id: 6 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
