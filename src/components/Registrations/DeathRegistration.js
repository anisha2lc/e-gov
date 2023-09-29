import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { InstructionContext } from "../ContextAPI/contextApi";

import Nepal from "../../assets/images/nepalImg.jpg";

const FillForm = () => {
  let navigate = useNavigate();

  const {
    deathRegistration,
    setDeathRegistration,
    deathForm,
    setDeathForm,
    setDeathData,
  } = useContext(InstructionContext);

  const [deathFormError, setDeathFormError] = useState({});

  const handleSubmit = (e) => {
    setDeathRegistration(deathRegistration + 1);
    e.preventDefault();
    setDeathFormError(validate(deathForm));
    setDeathData((prev) => {
      return [...prev, deathForm];
    });
    console.log(deathForm, "saved");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "required";
    }
    if (!values.birthplace) {
      errors.birthplace = "Required";
    }
    if (!values.dob) {
      errors.dob = "Required";
    }
    if (!values.dod) {
      errors.dod = "Required";
    }
    if (!values.deathplace) {
      errors.deathplace = "required";
    }
    if (!values.fathers_name) {
      errors.fathers_name = "Required";
    }
    if (!values.mothers_name) {
      errors.mothers_name = "Required";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeathForm({ ...deathForm, [name]: value });
  };

  const Redirect = () => {
    navigate("/dashboard");
  };
  console.log(deathForm, "form");

  return (
    <div className="wrapper">
      <header className="header position-sticky top-0">
        <div className="main-wrapper d-flex justify-content-between align-items-center">
          <img className="nepal-image" src={Nepal} />
          <button
            onClick={Redirect}
            className="go-back-button btn btn-primary m-2 rounded-md  text-3xl text-red h-8 w-20 "
          >
            🔙
          </button>
        </div>
      </header>
      <div className=" mx-auto bg-white h-100vh px-0">
        <div class="main-container">
          <div>
            <div className="main-div">
              <div className="form">
                <div className="form-main rounded">
                  <h2 className="b1 text-center">Death Registration Form</h2>
                  <form>
                    <div>
                      <label className="p-2">Full name : </label>
                      <input
                        type="text"
                        name="fullname"
                        className="form-control"
                        onChange={handleChange}
                        value={deathForm.fullname}
                      />
                      <p className="text-danger">{deathFormError.fullname}</p>
                    </div>

                    <div>
                      <label className="p-2">Birth Place : </label>
                      <input
                        type="text"
                        name="birthplace"
                        className="form-control"
                        onChange={handleChange}
                        value={deathForm.birthplace}
                      />
                      <p className="text-danger">{deathFormError.birthplace}</p>
                    </div>

                    <div>
                      <label className="p-2">Date Of Birth:</label>
                      <input
                        type="text"
                        name="dob"
                        className="form-control"
                        onChange={handleChange}
                        value={deathForm.dob}
                      />
                      <p className="text-danger">{deathFormError.dob}</p>
                    </div>

                    <div>
                      <label className="p-2">Date Of Death:</label>
                      <input
                        type="text"
                        name="dod"
                        className="form-control"
                        onChange={handleChange}
                        value={deathForm.dod}
                      />
                      <p className="text-danger">{deathFormError.dod}</p>
                    </div>

                    <div>
                      <label className="p-2">deathplace:</label>
                      <input
                        type="text"
                        name="deathplace"
                        className="form-control"
                        onChange={handleChange}
                        value={deathForm.deathplace}
                      />
                      <p className="text-danger">{deathFormError.deathplace}</p>
                    </div>

                    <div>
                      <label className="p-2">Mother's Name:</label>
                      <input
                        type="text"
                        name="mothers_name"
                        className="form-control"
                        onChange={handleChange}
                        value={deathForm.mothers_name}
                      />
                      <p className="text-danger">
                        {deathFormError.mothers_name}
                      </p>
                    </div>

                    <div>
                      <label className="p-2">Father's Name:</label>
                      <input
                        type="text"
                        name="fathers_name"
                        className="form-control"
                        onChange={handleChange}
                        value={deathForm.fathers_name}
                      />
                      <p className="text-danger">
                        {deathFormError.fathers_name}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary m-2"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillForm;
