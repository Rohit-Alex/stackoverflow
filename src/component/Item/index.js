import React from "react";
import "./style.css";
const Item = ({ item, setModalOpen, setCurr }) => {
  return (
    <tr
      className="row"
      onClick={() => {
        setModalOpen(true);
        setCurr(item);
      }}
    >
      <td className="imgCont">
        <img
          src={item.owner.profile_image}
          alt={item.owner.display_name}
          className="image"
        />
        <div>{item.owner.display_name}</div>
      </td>
      <td className="creation_date">{item.creation_date}</td>
      <td className="title">{item.title}</td>
      <td className="ques_id">{item.question_id}</td>
    </tr>
  );
};

export default Item;
