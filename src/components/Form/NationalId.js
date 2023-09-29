import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { InstructionContext } from "../ContextAPI/contextApi";

import Nepal from "../../assets/images/nepalImg.jpg";

const FillForm = () => {
  let navigate = useNavigate();
  const [nationFormError, setNationFormError] = useState({});
  const {
    nationalIdRegistration,
    setNationalIdRegistration,
    nationForm,
    setNationForm,
    nationalIdData,
    setNationalIdData,
  } = useContext(InstructionContext);

  const handleClick = (e) => {
    setNationalIdRegistration(nationalIdRegistration + 1);
    e.preventDefault();
    setNationFormError(validate(nationForm));
    setNationalIdData((prev) => {
      return [...prev, nationForm];
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
    setNationForm({ ...nationForm, [name]: value });
  };

  const Redirect = () => {
    navigate("/dashboard");
  };

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
                  <h3 className="b1 text-center">
                    National ID Registration Form
                  </h3>
                  <form>
                    <h3 className="text-danger">Personal Details:</h3>
                    <div>
                      <label className="p-2">Full name : </label>
                      <input
                        type="text"
                        name="fullname"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.fullname}
                      />
                      <p className="text-danger">{nationFormError.fullname}</p>
                    </div>

                    <div>
                      <label className="p-2">Date Of Birth:</label>
                      <input
                        type="text"
                        name="dob"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.dob}
                      />
                      <p className="text-danger">{nationFormError.dob}</p>
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
                        value={nationForm.province}
                      />
                      <p className="text-danger">{nationFormError.province}</p>
                      <label className="p-2">District:</label>
                      <input
                        type="text"
                        name="district"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.district}
                      />
                      <p className="text-danger">{nationFormError.district}</p>
                      <label className="p-2">Municipality:</label>
                      <input
                        type="text"
                        name="municipality"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.municipality}
                      />
                      <p className="text-danger">
                        {nationFormError.municipality}
                      </p>
                      <label className="p-2">Ward no:</label>
                      <input
                        type="text"
                        name="ward_no"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.ward_no}
                      />
                      <p className="text-danger">{nationFormError.ward_no}</p>
                      <label className="p-2">Street name:</label>
                      <input
                        type="text"
                        name="street_name"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.street_name}
                      />
                      <p className="text-danger">
                        {nationFormError.street_name}
                      </p>
                    </div>

                    <h3 className="text-danger">Citizenship Details:</h3>
                    <div>
                      <label className="p-2">CitizenShip No.:</label>
                      <input
                        name="citizenship_number"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.citizenship_number}
                      />
                      <p className="text-danger">
                        {nationFormError.citizenship_number}
                      </p>
                      <label className="p-2">Issue Date:</label>
                      <input
                        type="text"
                        name="issue_date"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.issue_date}
                      />
                      <p className="text-danger">
                        {nationFormError.issue_date}
                      </p>
                    </div>

                    <h3 className="text-danger p-2">Parental Details:</h3>
                    <div>
                      <label className="p-2">Mother's Full Name:</label>
                      <input
                        type="text"
                        name="mothers_name"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.mothers_name}
                      />
                      <p className="text-danger">
                        {nationFormError.mothers_name}
                      </p>
                      <label className="p-2">Father's Full Name:</label>
                      <input
                        type="text"
                        name="fathers_name"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.fathers_name}
                      />
                      <p className="text-danger">
                        {nationFormError.fathers_name}
                      </p>
                      <label className="p-2">GrandFather's Full Name</label>
                      <input
                        type="text"
                        name="grandfather_name"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.grandfather_name}
                      />
                      <p className="text-danger">
                        {nationFormError.grandfather_name}
                      </p>
                      <label className="p-2">GrandMother's Full Name:</label>
                      <input
                        type="text"
                        name="grandmother_name"
                        className="form-control"
                        onChange={handleChange}
                        value={nationForm.grandmother_name}
                      />
                      <p className="text-danger">
                        {nationFormError.grandmother_name}
                      </p>
                    </div>

                    <div>
                      <label className="p-2">Migration Done:</label>
                      <div className="d-flex justify-content-around align-items-center">
                        <div className="d-flex align-items-center">
                          <input
                            type="radio"
                            value="yes"
                            name="gender"
                            // onClick={setMigration(true)}
                          />
                          <label className="p-2">Yes</label>
                        </div>
                        <div className="d-flex align-items-center">
                          <input type="radio" value="No" name="gender" />
                          <label className="p-2">No</label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="p-2">Migrated From</label>
                      <input
                        type="text"
                        value={nationForm.migrated_from}
                        name="migrated_from"
                        onChange={handleChange}
                      />

                      <label className="p-2">Migrated To</label>
                      <input
                        type="text"
                        value={nationForm.migrated_to}
                        name="migrated_to"
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      className="btn btn-primary m-2"
                      onClick={(e) => handleClick(e)}
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
