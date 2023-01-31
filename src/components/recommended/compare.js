import React from "react";
import DATA from "../DATA Folder/CasesData";
import { Categories } from "../main page/Categories";

export const Compare = () => {
  const Data = DATA.productItems;
  const result = Data.filter((item) => item.compared === true);
  console.log(result.name);
  return (
    <>
      <section className="home">
        <div className="d-flex">
          <Categories />
          <section className="compare-items">
            <h2>COMPARE PRODUCTS</h2>
            <div className="container d-flex">
              <div className="items-details">
                <table className="table">
                  <thead>
                    <tr>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>Name</tr>
                    <tr>
                      {result.map((result) => {
                        return (
                          <>
                            <td>{result.name}</td>
                          </>
                        );
                      })}
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>Price</tr>
                    <tr>
                      {result.map((result) => {
                        return (
                          <>
                            <td>{result.price}</td>
                          </>
                        );
                      })}
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>Brand</tr>
                    <tr>
                      {result.map((result) => {
                        return (
                          <>
                            <td>{result.company}</td>
                          </>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
