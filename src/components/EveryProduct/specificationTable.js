import React from "react";

export const SpecificationTable = ({select}) => {
  
    return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>VAlue</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>company</td>
            <td>{select.company}</td>
          </tr>
          <tr >
            <td>price</td>
            <td>{select.price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
