import React from "react";
import Modal from "react-modal";
// import { Link } from "react-router-dom";
import "./style.css";
const Popup = ({ curr, modalOpen, setModalOpen }) => {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={{
        overlay: {},
        content: {
          position: "absolute",
          top: 200,
          left: 300,
          right: 300,
          bottom: 180,
          borderRadius: 30,
          backgroundColor: "rgb(205 154 171)",
        },
      }}
    >
      <div className="modal_cont">
        <h4>Author Name : </h4>
        <div>{curr?.owner.display_name}</div>
        <h4>Title :</h4>
        <div>{curr?.title}</div>
        <h4>Creation Date :</h4>
        <div>{curr?.creation_date}</div>
        <h4>Author ID : </h4>
        <div>{curr?.owner.user_id}</div>
        <h4>Tags : </h4>
        <div>{curr?.tags[0]}</div>
        <div>
          <a href={`${curr?.link}`}>{curr?.link}</a>
        </div>
      </div>
      <br />
      <button
        style={{
          border: "none",
          outline: "none",
          height: 30,
          width: 50,
          borderRadius: 10,
        }}
        className="modal_btn"
        onClick={() => setModalOpen(false)}
      >
        Close
      </button>
    </Modal>
  );
};

export default Popup;
