import React, { useContext, useEffect, useState } from "react";

import { InstructionContext } from "../ContextAPI/contextApi";
import { useNavigate } from "react-router-dom";

import SearchIcon from "../../assets/images/searchIcon.svg";

const BirthDetails = () => {
  const { birthData, setBirthData, modalDetail, setModalDetail } =
    useContext(InstructionContext);
  const [value, setValue] = useState([]);

  const navigate = useNavigate();

  const key = "birthRegisteredValue";

  useEffect(() => {
    if (!birthData.length) return;
    localStorage.setItem(key, JSON.stringify(birthData));
  }, [birthData]);

  function init() {
    const value = localStorage.getItem(key);

    if (value) {
      setBirthData(JSON.parse(value));
    }

    setModalDetail(false);
  }

  useEffect(() => init(), []);

  return (
    <div>
      <h4 className="text-danger text-center">
        Here are the details of the registered Birth.
      </h4>
      <div className="d-flex justify-content-between align-items-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="btn"
          data-cy="back-btn"
        >
          Go Back
        </button>
        <div class="input-group justify-content-end">
          <div class="form-outline">
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder="Search the User"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
        </div>
      </div>
      <table className="table align-middle rounded-top bg-white p-2 m-2">
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>

        <tbody>
          {/* <tr>
            <td>Anisha</td>
            <td>2057/08/02</td>
            <td>Greenland , Tokha</td>
            <td>Bhim Nath Sharma Lamichhane</td>
            <td>Sangita Lamichhane</td>
            <td>9860939905</td>
          </tr>
          <tr>
            <td>Rojina</td>
            <td>2057/09/16</td>
            <td>Greenland , Tokha</td>
            <td>Ram Bahadur Thapa</td>
            <td>Sunita Thapa</td>
            <td>9866295523</td>
          </tr>
          <tr>
            <td>Kamal</td>
            <td>2054/02/16</td>
            <td>Greenland , Tokha</td>
            <td>Ramesh Yonjan</td>
            <td>Tara Yonjan</td>
            <td>9841491989</td>
          </tr> */}
          {birthData
            .filter(
              (user) =>
                user.fullname.toLowerCase().includes(value) ||
                user.dob.includes(value) ||
                user.municipality.toLowerCase().includes(value) ||
                user.fathers_name.toLowerCase().includes(value) ||
                user.mothers_name.toLowerCase().includes(value) ||
                user.contact.includes(value)
            )
            .map((birthValue, index) => (
              <>
                <tr key={index}>
                  <td>{birthValue.fullname}</td>
                  <td>{birthValue.dob}</td>
                  <td>
                    {birthValue.municipality} ,{birthValue.district}
                  </td>
                  <td>{birthValue.fathers_name}</td>
                  <td>{birthValue.mothers_name}</td>
                  <td>{birthValue.contact}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BirthDetails;
