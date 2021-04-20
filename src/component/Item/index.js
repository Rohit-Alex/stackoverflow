import React from "react";
import "./style.css";
const Item = ({ item, setModalOpen, setCurr }) => {
  return (
    <tr
      onClick={() => {
        setModalOpen(true);
        setCurr(item);
      }}
    >
      <td>{item.owner.display_name}</td>
      <td>{item.creation_date}</td>
      <td>
        <a href={item.link}>{item.link}</a>
      </td>
      <td>{item.title}</td>
    </tr>
  );
};

export default Item;
