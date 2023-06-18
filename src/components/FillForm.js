import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { InstructionContext } from "./contextApi";

import Nepal from "../assets/images/nepalImg.jpg";

const FillForm = () => {
  const {
    form,
    setForm,
    birthRegistration,
    setBirthRegistration,
    birthData,
    setBirthData,
  } = useContext(InstructionContext);

  let navigate = useNavigate();
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setBirthRegistration(birthRegistration + 1);

    setFormError(validate(form));

    setBirthData((prev) => {
      return [...prev, form];
    });
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
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const Redirect = () => {
    navigate("/");
  };
  console.log(form, "form");

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
                  <h2 className="b1 text-center">Birth Registration Form</h2>
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-danger">Personal Details:</h3>
                    <div>
                      <label className="p-2">Full name : </label>
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

                    <div>
                      <label className="p-2">Sex:</label>
                      <div className="d-flex justify-content-around align-items-center">
                        <div className="d-flex align-items-center">
                          <input
                            type="radio"
                            value="Male"
                            name="male"
                            onClick={handleChange}
                          />
                          <label className="p-2">Male</label>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            type="radio"
                            value="Female"
                            name="female"
                            onClick={handleChange}
                          />
                          <label className="p-2">Female</label>
                        </div>
                        <div className="d-flex align-items-center">
                          <input
                            type="radio"
                            value="Other"
                            name="other"
                            onClick={handleChange}
                          />
                          <label className="p-2">Other</label>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-danger">Address Details:</h3>
                    <div>
                      <label className="p-2">Province:</label>
                      <input
                        type="text"
                        name="province"
                        className="form-control"
                        onChange={handleChange}
                        value={form.province}
                      />
                      <p className="text-danger">{formError.province}</p>
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
                      <label className="p-2">Ward no:</label>
                      <input
                        type="text"
                        name="ward_no"
                        className="form-control"
                        onChange={handleChange}
                        value={form.ward_no}
                      />
                      <p className="text-danger">{formError.ward_no}</p>
                      <label className="p-2">Street name:</label>
                      <input
                        type="text"
                        name="street_name"
                        className="form-control"
                        onChange={handleChange}
                        value={form.street_name}
                      />
                      <p className="text-danger">{formError.street_name}</p>
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
                      <label className="p-2">GrandFather's Full Name</label>
                      <input
                        type="text"
                        name="grandfather_name"
                        className="form-control"
                        onChange={handleChange}
                        value={form.grandfather_name}
                      />
                      <p className="text-danger">
                        {formError.grandfather_name}
                      </p>
                      <label className="p-2">GrandMother's Full Name:</label>
                      <input
                        type="text"
                        name="grandmother_name"
                        className="form-control"
                        onChange={handleChange}
                        value={form.grandmother_name}
                      />
                      <p className="text-danger">
                        {formError.grandmother_name}
                      </p>
                    </div>

                    <div>
                      <label className="p-2">Migration Done:</label>
                      <div className="d-flex justify-content-around align-items-center">
                        <div className="d-flex align-items-center">
                          <input type="radio" value="yes" name="gender" />{" "}
                          <label className="p-2">Yes</label>
                        </div>
                        <div className="d-flex align-items-center">
                          <input type="radio" value="No" name="gender" />
                          <label className="p-2">No</label>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-primary m-2">Save</button>
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
