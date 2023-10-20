import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"; // Import the styles

import { InstructionContext } from "../ContextAPI/contextApi";

import Nepal from "../../assets/images/nepalImg.jpg";

const FillForm = () => {
  const {
    form,
    setForm,
    birthRegistration,
    setBirthRegistration,
    setBirthData,
    setIsModalOpen,
  } = useContext(InstructionContext);

  let navigate = useNavigate();
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setBirthRegistration(birthRegistration + 1);

    setFormError(validate(form));

    setBirthData((prev) => {
      return [...prev, form];
    });

    toast.success("Submitted Successfully");

    resetForm();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "required";
    }
    if (!values.dob) {
      errors.dob = "Required";
    }
    if (!values.province) {
      errors.province = "Required";
    }
    if (!values.district) {
      errors.district = "Required";
    }
    if (!values.municipality) {
      errors.municipality = "required";
    }
    if (!values.ward_no) {
      errors.ward_no = "Required";
    }
    if (!values.street_name) {
      errors.street_name = "Required";
    }
    if (!values.fathers_name) {
      errors.fathers_name = "Required";
    }
    if (!values.mothers_name) {
      errors.mothers_name = "Required";
    }
    if (!values.grandfather_name) {
      errors.grandfather_name = "required";
    }
    if (!values.grandmother_name) {
      errors.grandmother_name = "Required";
    }
    if (!values.contact) {
      errors.contact = "Required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const Redirect = () => {
    navigate("/dashboard");
  };

  const isButtonDisabled =
    !form.contact ||
    !form.fullname ||
    !form.dob ||
    !form.district ||
    !form.municipality ||
    !form.mothers_name ||
    !form.fathers_name;

  const resetForm = () => {
    setForm({
      fullname: "",
      dob: "",
      municipality: "",
      district: "",
      fathers_name: "",
      mothers_name: "",
      contact: "",
    });

    // Clear any form errors as well if needed
    setFormError({});
  };

  return (
    <div className="wrapper">
      <header className="header position-sticky top-0">
        <div className="main-wrapper d-flex justify-content-between align-items-center">
          <img className="nepal-image" src={Nepal} alt="Nepal" />
          <button
            onClick={Redirect}
            className="go-back-button btn m-2 rounded-md  text-3xl text-red h-8 w-20"
            data-cy="redirect"
          >
            🔙
          </button>
        </div>
      </header>
      <div className="mx-auto bg-white h-100vh px-0">
        <div class="main-container">
          <div>
            <div className="main-div">
              <div className="form">
                <div className="form-main rounded">
                  <h2 className="b1 text-center" data-cy="birth-registration">
                    Birth Registration Form
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-danger">Personal Details:</h3>
                    <div>
                      <label className="p-2">Full name :</label>
                      <input
                        type="text"
                        name="fullname"
                        className="form-control"
                        onChange={handleChange}
                        value={form.fullname}
                      />
                      <p className="text-danger">{formError.fullname}</p>
                    </div>

                    <div>
                      <label className="p-2">Date Of Birth:</label>
                      <input
                        type="string"
                        name="dob"
                        className="form-control"
                        onChange={handleChange}
                        value={form.dob}
                      />
                      <p className="text-danger">{formError.dob}</p>
                    </div>

                    <h3 className="text-danger">Address Details:</h3>
                    <div>
                      <label className="p-2">District:</label>
                      <input
                        type="text"
                        name="district"
                        className="form-control"
                        onChange={handleChange}
                        value={form.district}
                      />
                      <p className="text-danger">{formError.district}</p>
                      <label className="p-2">Municipality:</label>
                      <input
                        type="text"
                        name="municipality"
                        className="form-control"
                        onChange={handleChange}
                        value={form.municipality}
                      />
                      <p className="text-danger">{formError.municipality}</p>
                    </div>

                    <h3 className="text-danger p-2">Parental Details:</h3>
                    <div>
                      <label className="p-2">Mother's Full Name:</label>
                      <input
                        type="text"
                        name="mothers_name"
                        className="form-control"
                        onChange={handleChange}
                        value={form.mothers_name}
                      />
                      <p className="text-danger">{formError.mothers_name}</p>
                      <label className="p-2">Father's Full Name:</label>
                      <input
                        type="text"
                        name="fathers_name"
                        className="form-control"
                        onChange={handleChange}
                        value={form.fathers_name}
                      />
                      <p className="text-danger">{formError.fathers_name}</p>
                      <label className="p-2">Number:</label>
                      <input
                        type="number"
                        name="contact"
                        className="form-control"
                        onChange={handleChange}
                        value={form.contact}
                      />
                      <p className="text-danger">{formError.contact}</p>
                    </div>
                    <button
                      className="btn m-2 w-100"
                      disabled={isButtonDisabled}
                      data-cy="save-button"
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
      <ToastContainer data-cy="toaster" />
    </div>
  );
};

export default FillForm;
