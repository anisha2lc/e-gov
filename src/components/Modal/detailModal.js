import React, { useContext, useEffect } from "react";

import { NavLink } from "react-router-dom";

import CrossImage from "../../assets/images/cross.svg";
import { InstructionContext } from "../ContextAPI/contextApi";

const ModalValidation = () => {
  const {
    modalDetail,
    setModalDetail,
    birthRegistration,
    setBirthRegistration,
    deathRegistration,
    nationalIdRegistration,
  } = useContext(InstructionContext);

  const closeModal = () => {
    setModalDetail(false);
  };

  useEffect(() => {
    localStorage.setItem(
      "birthRegistration",
      JSON.stringify(birthRegistration)
    );
  }, [birthRegistration]);

  function init() {
    const value = localStorage.getItem("birthRegistration");

    if (value) {
      setBirthRegistration(JSON.parse(value));
    }
  }
  useEffect(() => init(), []);

  return (
    <>
      {modalDetail === true ? (
        <div className="position-relative d-block">
          <div className="overlay vh-100 position-fixed inset-0 z-50">
            <div className="inside-modal top-0 start-0 vh-100 vw-100 position-fixed" />
            <div className="custom-modal top-50 start-50 translate-middle position-fixed card shadow-2xl shadow-ebony-clay bg-white border-0 rounded-3 overflow-hidden fixed z-50 ">
              <div className="p-4 m-4">
                <h4 className="text-center p-2">Click to see the details</h4>
                <p
                  className="close position-absolute m-2 "
                  onClick={(e) => closeModal(e)}
                >
                  <img src={CrossImage} />
                </p>
                <table className="table align-middle rounded-top bg-white p-2 m-2">
                  <thead className="thead">
                    <tr>
                      <th>Title</th>
                      {/* <th>Number of Registration</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-data">
                        <NavLink to="/birth-details" data-cy="birth-details">
                          Registration of Birth
                        </NavLink>
                      </td>
                      {/* <td>{birthRegistration}</td> */}
                    </tr>
                    <tr>
                      <td className="table-data">
                        <NavLink to="/death-details">
                          Registration Of Death
                        </NavLink>
                      </td>
                      {/* <td>{deathRegistration}</td> */}
                    </tr>
                    <tr>
                      <td className="table-data">
                        <NavLink to="/national-id-details">
                          Registration Of national Id Card
                        </NavLink>
                      </td>
                      {/* <td>{nationalIdRegistration}</td> */}
                    </tr>
                  </tbody>
                </table>
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
