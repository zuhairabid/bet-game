import React, { useState } from "react";
import { ModalState } from "../Contexts/ModalContext";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalAnimated() {
  const { showModal, setShowModal, showComponent } = ModalState();
  return (
    <div className="z-[100]">
      {" "}
      <div
        className={`z-[100] overflow-scroll transition-[top] transition-linear transition-duration-75 fixed  left-0 h-screen w-screen bg-white bg-opacity-90 ${
          showModal ? "top-0" : "top-[-100vh] "
        }`}
      >
        {" "}
        <div>
          <p
            className="w-full text-right z-[100]"
            onClick={() => setShowModal(!showModal)}
          >
            {" "}
            <FontAwesomeIcon icon={faClose} className="h-10 p-5 " />
          </p>
        </div>
        <div className="px-2">{showComponent}</div>
      </div>
      {/* <button onClick={() => setShowModal(!showModal)}>show</button> */}
    </div>
  );
}

export default ModalAnimated;
