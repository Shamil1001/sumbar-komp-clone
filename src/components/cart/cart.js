import React from "react";
import "./cart.css";
import { Categories } from "../main page/Categories";

const Cart = ({ cartItem, addToCart, decrease }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <section className="home">
        <div className="d-flex">
          <Categories />
          <section className="cart-items">
            <h2>Cart</h2>
            <div className="container d-flex">
              <div className="cart-details">
                {cartItem.length === 0 && (
                  <h1 className="no-items product">No Items are added here</h1>
                )}

                <div className="cart-list product">
                  {/* <div className="img">
                                <img src={item.img1}/>
                            </div> */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th></th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th>
                          <button className="btn btn-secondary btn-sm">
                            <i className="fa fa-remove"></i>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem.map((item) => {
                        const productQty = item.price * item.qty;
                        return (
                          <>
                            <tr key={item.id}>
                              <td className="table-image">
                                <img src={item.img1} />
                              </td>
                              <td>{item.name}</td>
                              <td className="amount">
                                <button
                                  className="btn btn-default btn-sm"
                                  onClick={() => addToCart(item)}
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                                {item.qty}
                                <button
                                  className="btn btn-default btn-sm"
                                  onClick={() => decrease(item)}
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                              </td>
                              <td>{productQty}.00 TMT</td>
                              <td>
                                <button className="btn btn-default">
                                  <i className="fa fa-remove "></i>
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="cart-total product">
              <h2>Cart Summary</h2>
              <div className="delivery-city f-flex">
                <div className="delivery">
                  <label>
                    Delivery city
                    <span className="text-danger">*</span>
                  </label>
                </div>
                <select className="city">
                  <option value="1" selected>
                    Ashgabat
                  </option>
                  <option value="2">Lebap</option>
                  <option value="3">Ahal</option>
                  <option value="4">Mary</option>
                  <option value="5">Dashoguz</option>
                  <option value="6">Balkan</option>
                </select>
              </div>
              <table className="table d-flex">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Products</td>
                    <td>{totalPrice}.00 TMT</td>
                  </tr>
                  <tr>
                    <td>Delivery</td>
                    <td>0.00 TMT</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>{totalPrice}.00 TMT</td>
                  </tr>
                </tbody>
              </table>
              <div className="order-button f-flex">
                <button className="btn btn-danger">Order</button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Cart;
