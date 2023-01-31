import React, { useState } from "react";
import DATA from "../DATA Folder/CasesData";
import "./recommend.css";
import { Link, Outlet } from "react-router-dom";

export const NewRecommend = ({
  addToCart,
  handleTap,
  query,
  select,
  handleChange
}) => {
  const Data = DATA.productItems;
  const [data, setData] = useState(Data);

  const [likedItem, setLikedItem] = useState(Data.liked);

  const handleLike = (item) => {
    if (item.liked) {
      item.liked = false;
      setLikedItem(item.liked);
    } else {
      item.liked = true;
      setLikedItem(item.liked);
    }
  };

  const filterResult = (selectedItem) => {
    const result = Data.filter((curData) => {
      return curData.card === selectedItem;
    });
    setData(result);
  };
  return (
    <>
      <div className="box-cat">
        <div className="catName">
          <span onClick={() => filterResult("recommend")}>RECOMMEND</span>
          <span onClick={() => filterResult("new")}>NEW</span>
          <span onClick={() => filterResult("popular")}>POPULAR</span>
        </div>
      </div>
      <div className="flex-container mx-0 filteredProducts">
        {data
          .filter((dataItem) =>
            dataItem.ShortDescription.toLowerCase().includes(query)
          )
          .map((values) => {
            const { card, name, price, id, img1, liked } = values;
            return (
              <>
                {/* <div className="row mt-2"> */}
                {/* <div className="col-md-12 flex-column ">
                    <div className="row mt-5 ">
                      <div className="col-md-5 ">
                        
                      </div>
                    </div>
                  </div> */}
                {/* </div> */}
                {/* <div className="flex-container"> */}
                  {/* <div className="col-md-13 "> */}
                    <div className="card h-100 text-center p-4 flex-column mt-1 mt-sm-2" key={id}>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value={name}
                        onChange={() => handleChange(values)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        Compare
                      </label>
                      <i
                        className={!liked ? "fa fa-heart-o" : "fa fa-heart"}
                        onClick={() => handleLike(values)}
                      ></i>
                    </div>
                    <Link to={`/products/${id}`}>
                      <img
                        src={img1}
                        className="cardImg"
                        onClick={() => handleTap(values)}
                      />
                    </Link>
                    <div className="card-body">
                      <div className="product-details">
                        <h5 onClick={() => handleTap(values)}>{name}</h5>
                        <div className="price">
                          <h5>{price}.00 TMT</h5>
                          <button
                            className="btn btn-danger"
                            onClick={() => addToCart(values)}
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* </div> */}
                {/* </div> */}
                <Outlet />
              </>
            );
          })}
      </div>
    </>
  );
};
