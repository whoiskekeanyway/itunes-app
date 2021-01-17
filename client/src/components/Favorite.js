import React from "react";
import { Table } from "reactstrap";
import "../App.css";

export default props => {
  const { favoriteList } = props;

  return (
    <div className="favorite-inp">
      <h4> Favorite List</h4>
      <Table bordered dark>
        <thead>
          <tr>
            <th></th>
            <th>
            </th>
          </tr>
        </thead>
      </Table>
      <Table bordered>
        <tbody>
          <tr className="row-container">
            {favoriteList.map(item => {
              return (
                <div>
                  <a key={item.id} href={item.link}>
                    <td className="favorite-wraper">
                      <img
                        className="favourite-image"
                        src={item.img}
                        alt={item.title}
                      />
                    </td>
                    <td className="favorite-username">{item.title}</td>
                  </a>
                </div>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
