import React from "react";
import Navbar from "./Navbar";
import ItemList from "./ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItemList from "./AddItemList";
import Home from "./Home";
import { ItemType } from "./types";

export type ContextType = {
  searchInput: string;
  handleChange: (e: any) => void;
  product: ItemType[];
  addItem: (e: any) => void;
  cartData: ItemType[];
  setCartData: any;
  alreadyAddItem: (e: any) => void;
  total: number | undefined;
  setTotal: any;
  removeData: (e: any) => void;
};

export const UserContext = React.createContext<ContextType>({} as ContextType);

const Router: React.FC<ContextType> = ({
  product,
  searchInput,
  handleChange,
  addItem,
  total,
  setTotal,
  setCartData,
  cartData,
  removeData,
  alreadyAddItem,
}) => {
  return (
    <>
      <UserContext.Provider
        value={{
          searchInput,
          handleChange,
          product,
          addItem,
          cartData,
          setCartData,
          alreadyAddItem,
          total,
          setTotal,
          removeData,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ItemList" element={<ItemList />} />
            <Route path="/AddItemList" element={<AddItemList />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default Router;
