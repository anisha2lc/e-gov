import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import CrossImage from "../../assets/images/cross.svg";
import { InstructionContext } from "../ContextAPI/contextApi";

const ModalValidation = () => {
  const { isModalOpen, setIsModalOpen } = useContext(InstructionContext);

  const DEATH_REGISTRATION_PAGE = {
    INDEX: "/death-registration",
  };

  const FORM_FILL_PAGE = {
    INDEX: "/fill-form",
  };

  const National_ID = {
    INDEX: "/national-id",
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen === true ? (
        <div className="position-relative d-block">
          <div className="overlay vh-100 position-fixed inset-0 z-50">
            <div className="inside-modal top-0 start-0 vh-100 vw-100 position-fixed" />
            <div className="custom-modal top-50 start-50 translate-middle position-fixed card shadow-2xl shadow-ebony-clay bg-white border-0 rounded-3 overflow-hidden fixed z-50 ">
              <div className="p-2 m-2">
                <p
                  className="close position-absolute "
                  onClick={(e) => closeModal(e)}
                >
                  <img src={CrossImage} alt="cross" />
                </p>
                <div className="d-flex justify-content-between align-items-center flex-wrap m-5">
                  <button className="btn text-white m-2">
                    <NavLink to={FORM_FILL_PAGE.INDEX} className="navlink" data-cy="register-birth">
                      <b className="text-white">Register Birth</b>
                    </NavLink>
                  </button>
                  <button className="btn text-white m-2">
                    <NavLink
                      to={DEATH_REGISTRATION_PAGE.INDEX}
                      className="navlink"
                    >
                      <b className="text-white">Register Death</b>
                    </NavLink>
                  </button>
                  <button className="btn text-white m-2">
                    <NavLink to={National_ID.INDEX} className="navlink">
                      <b className="text-white">National Id Card</b>
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalValidation;
