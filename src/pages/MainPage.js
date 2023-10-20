import React, { useContext, useState } from "react";

import Nepal from "../assets/images/nepalImg.jpg";

import Instruction from "../components/Instruction/Instruction";
import ModalValidation from "../components/Modal/ModalValidation";
import InstructionToggler from "../components/Instruction/InstructionToggler";
import DetailModal from "../components/Modal/detailModal";
import { InstructionContext } from "../components/ContextAPI/contextApi";

const MainPage = () => {
  const { setIsModalOpen, modalDetail, setModalDetail } =
    useContext(InstructionContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const showDetailModal = () => {
    setModalDetail(true);
  };

  return (
    <>
      <div className="wrapper">
        <header className="header position-sticky top-0">
          <div className="main-wrapper d-flex justify-content-between align-items-center">
            <img className="nepal-image" src={Nepal} alt="Goverment logo" />
            <button className="btn m-4" onClick={openModal} data-cy="register">
              Register
            </button>
          </div>
        </header>

        <div className="container mx-auto my-3 px-0">
          <div
            className="page-heading text-center bg-light py-2 fw-bold h1"
            data-cy="country-logo"
          >
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
            <button
              className="btn mx-4"
              onClick={showDetailModal}
              data-cy="show-details"
            >
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
