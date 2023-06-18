import React, { useContext, useState } from "react";

import Nepal from "../assets/images/nepalImg.jpg";

import Instruction from "./Instruction";
import ModalValidation from "./ModalValidation";
import InstructionToggler from "./InstructionToggler";
import DetailModal from "./detailModal";
import { InstructionContext } from "./contextApi";

const MainPage = () => {
  const { setIsModalOpen, modalDetail, setModalDetail } =
    useContext(InstructionContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const showDetailModal = () => {
    setModalDetail(true);
  };

  console.log(modalDetail);

  return (
    <>
      <div className="wrapper">
        <header className="header position-sticky top-0">
          <div className="main-wrapper d-flex justify-content-between align-items-center">
            <img className="nepal-image" src={Nepal} />
            <button className="btn btn-primary m-4" onClick={openModal}>
              Register
            </button>
          </div>
        </header>

        <div className="container mx-auto my-3 px-0">
          <div className="page-heading text-center bg-light py-2 fw-bold h1">
            Nepal
            <span>Government</span>
          </div>

          <div className="app-header mt-5">
            <nav className="application-title navbar py-3 rounded">
              <div className="new-app-header px-3 fw-bold h4">
                New to our application?
              </div>
              <InstructionToggler />
            </nav>
          </div>

          <Instruction />
          <ModalValidation />
          <div className="bg-white p-5">
            <button className="btn btn-primary mx-4" onClick={showDetailModal}>
              Show Details
            </button>
          </div>
          <DetailModal />
        </div>
      </div>
    </>
  );
};

export default MainPage;
