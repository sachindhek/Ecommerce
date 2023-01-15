import React from "react";
import { ItemType } from "./types";
import "./style.css";
import { UserContext } from "./Router";
import { useContext } from "react";

// interface Props {
//   product?: ItemType[] | undefined;
// }

const Home: React.FC = () => {
  const { product } = useContext(UserContext);
  return (
    <>
      <h1 className="text-center">WELCOME</h1>
      {
        <div className="container-fluid d-flex main">
          {product?.map((elem: ItemType) => {
            const { image, id } = elem;
            return (
              <div className="itemList" key={id}>
                <div className="img rounded">
                  <a href="ItemList.tsx">
                    <img
                      src={image}
                      className="imageList"
                      height="300px"
                      width="250px"
                      alt="images"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      }
    </>
  );
};

export default Home;
