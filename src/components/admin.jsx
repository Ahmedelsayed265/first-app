import React from "react";
import Dpro from "./DFM";
import Upro from "./UFM";
const Pannel = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <Upro product={product}/>
            </td>
            <td>
              <Dpro onDelete={props.onDelete} product={product} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Pannel;
