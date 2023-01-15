import React, { useEffect } from "react";
import { ItemType } from "./types";
import { UserContext } from "./Router";
import { useContext } from "react";

const AddItemList: React.FC = () => {
  const { cartData, total, setCartData, setTotal, searchInput, removeData } =
    useContext(UserContext);
  const filterCartdata = cartData.filter((elem) => {
    if (searchInput === "") {
      return elem;
    } else {
      return elem.title.toLowerCase().includes(searchInput);
    }
  });

  const updateAmount = (value: number, index: number) => {
    let cartCopy = [...cartData];
    let dataValue = cartCopy[index];
    dataValue.quantity = value;
    dataValue.amount = dataValue.price * dataValue.quantity;
    cartCopy.splice(index, 1, dataValue);
    setCartData(cartCopy, dataValue);
  };

  useEffect(() => {
    setTotal(
      cartData.reduce(
        (initialValue, currentValue) => initialValue + currentValue.amount,
        0
      )
    );
  });

  return (
    <>
      <div style={{ border: "2px solid #a99999" }}>
        <h1 className="mt-5 text-center fw-bolder">ORDER LIST</h1>
        <hr />
        <div className=" mt-4 rounded" style={{ border: "2px solid #a99999" }}>
          {filterCartdata?.map((item: ItemType, index) => {
            // const {id,description,category,image,price,title,rating,amount} = item;
            return (
              <div className="d-block px-4 py-2" key={item.id}>
                <div
                  className="card mt-3 p-2"
                  style={{ display: "-webkit-box" }}
                >
                  <div className="imag w-20 m-1">
                    <img
                      src={item.image}
                      alt="item-immage"
                      className="round"
                      height="300px"
                      width="500px"
                    />
                  </div>
                  <div
                    className="mt-3 mx-3 m-auto"
                    style={{ width: "calc(79% - 500px)" }}
                  >
                    <div>
                      <div className="w-100 m-3">
                        <h1>{item.title}</h1>
                      </div>
                      <div className="m-3">
                        <h5>Category:{item.category}</h5>
                        <h6>
                          <b className="fs-5">Description </b>:{" "}
                          {item.description}
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="p-4 mt-4">
                        <button
                          className="btn btn-outline-dark p-2 mx-2 px-2"
                          onClick={() => {
                            removeData(item.id);
                          }}
                        >
                          <i className="fa fa-trash"></i> &nbsp;Remove
                        </button>
                      </div>
                      <div className="m-auto">
                        <div className="w-40  rounded p-1 m-1">
                          <b>
                            <span className="fs-3">Price: ${item.price}</span>
                          </b>
                        </div>
                        <div className="m-3">
                          <button className="m-2">
                            STOCK : {item.rating.count}
                          </button>
                        </div>
                      </div>

                      <div className="m-auto d-flex">
                        <div>
                          <h3>
                            Quantity
                            <span>
                              <select
                                className="px-3 p-2 rounded"
                                onChange={(e: any) =>
                                  updateAmount(e.target.value, index)
                                }
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </span>
                          </h3>
                          <div className="mt-3">
                            <h2>Subtotal: $ {item.amount}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {cartData.length > 0 ? (
            <div className="card mx-4">
              <h2 style={{ textAlign: "right", margin: "16px 4rem" }}>
                Total Amount: ${total}
              </h2>
            </div>
          ) : (
            <div>
              <h2 className="text-center">
                {" "}
                Please add some product,your card is empty
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddItemList;
