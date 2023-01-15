import React, { useEffect, useState } from "react";
import Router from "./Router";
import { ItemType } from "./types";

type Props = {
  item: ItemType[];
};

const Item: React.FC<Props> = ({ item }) => {
  const [product, setProduct] = useState<ItemType[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [cartData, setCartData] = useState<ItemType[]>([]);
  const [total, setTotal] = useState<number>();

  useEffect(() => {
    const getItemByApi = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      let productData = await response.json();
      setProduct(productData);
      // console.log(product);
    };
    getItemByApi();
  }, []);

  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const addItem = (id: number) => {
    console.log(id);
    let exist = cartData.find((object) => object.id === id);
    if (exist) {
      return alert("Already in Cart");
    } else {
      let itemValue: any = product.find((object) => object.id === id);
      let dataItem = [...cartData];
      // const { id, description, title, rating, category, image, price } =
      //   itemValue;
      let newitem = {
        id: itemValue.id,
        description: itemValue.description,
        title: itemValue.title,
        rating: itemValue.rating,
        category: itemValue.category,
        image: itemValue.image,
        price: itemValue.price,
        quantity: 1,
        amount: itemValue.price,
      };
      dataItem.push(newitem);
      setCartData(dataItem);
      console.log(dataItem);
      alert("Successfully Add to Cart");
    }
  };

  const alreadyAddItem = (elem: any) => {
    let item = cartData.find((object) => object.id === elem);
    if (item) {
      return alert("Already in Cart");
    }
  };

  const removeData = (id: number) => {
    let index = cartData.findIndex((object) => object.id === id);
    cartData.splice(index, 1);
    setCartData([...cartData]);
    alert("Successfully Remove from Cart");
  };
  return (
    <>
      <Router
        product={product}
        handleChange={handleChange}
        searchInput={searchInput}
        addItem={addItem}
        total={total}
        setTotal={setTotal}
        cartData={cartData}
        setCartData={setCartData}
        removeData={removeData}
        alreadyAddItem={alreadyAddItem}
      />
    </>
  );
};

export default Item;
