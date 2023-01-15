import React from "react";
import { ItemType } from "./types";
import { UserContext } from "./Router";
import { useContext } from "react";
import "./style.css";

// interface Props {
//   product?: ItemType[];
//   addItem: (e: any) => void;
//   cartData: ItemType[];
//   searchInput: string;
//   alreadyAddItem: (e: any) => void;
// }

const ItemList: React.FC = () => {
  const { product, addItem, cartData, searchInput, alreadyAddItem } =
    useContext(UserContext);
  const filterCartdata = product.filter((elem) => {
    if (searchInput === "") {
      return elem;
    } else {
      return elem.category.toLowerCase().includes(searchInput);
    }
  });
  return (
    <>
      <div className="card bg-dark text-white border-0">
        <img
          className="card"
          src="picture/images3.png"
          alt="coloredBackground"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
          </div>
        </div>
      </div>

      <h1 className="heading mt-3 mb-5">COLLECTION OF ITEM</h1>
      <div className="d-flex main">
        {filterCartdata?.map((elem: ItemType) => {
          // const { id, category, image, price, title, rating } = elem;
          return (
            <div className="itemList" key={elem.id}>
              <div className="imgs">
                <img
                  src={elem.image}
                  className="images"
                  height="300px"
                  width="300px"
                  alt="product-images"
                />
              </div>
              <div className="content">
                <div>
                  <p className="title">{elem.title}</p>
                </div>
                <div>
                  <p className="category">{elem.category.toUpperCase()}</p>
                </div>
                <div className="text-center">
                  <b>PRICE:- ${elem.price}</b>{" "}
                  <b className="m-5"> STOCK: {elem.rating.count}</b>
                </div>
                <div className="p-2">
                  {cartData.some((item) => item.id === elem.id) ? (
                    <button
                      className="bg-secondary rounded py-2 w-100 text-center "
                      onClick={() => {
                        alreadyAddItem(elem.id);
                      }}
                    >
                      Added to Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning w-100"
                      onClick={() => addItem(elem.id)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
