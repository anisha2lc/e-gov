import React, { useContext, useEffect } from "react";

import { InstructionContext } from "./contextApi";

const BirthDetails = () => {
  const { birthData, setBirthData } = useContext(InstructionContext);

  useEffect(() => {
    if (!birthData.length) return;
    localStorage.setItem("birthValue", JSON.stringify(birthData));
  }, [birthData]);

  function init() {
    const value = localStorage.getItem("birthValue");

    if (value) {
      setBirthData(JSON.parse(value));
    }
  }
  useEffect(() => init(), []);

  return (
    <div>
      <h4 className="text-danger text-center">
        Here are the details of the registered Birth.
      </h4>
      <table className="table align-middle rounded-top bg-white p-2 m-2">
        <thead className="thead">
          <tr>
            <th>Title</th>
            <th>Information</th>
          </tr>
        </thead>

        {/* <span>{birthData[0].fullname}</span> */}
        {birthData.map((birthValue, index) => (
          <tbody key={index}>
            <tr>
              <td className="table-data">Full Name:</td>
              <td>{birthValue.fullname}</td>
            </tr>
            <tr>
              <td className="table-data">Date of Birth:</td>
              <td>{birthValue.dob}</td>
            </tr>
            <tr></tr>
            <tr>
              <td className="table-data">province:</td>
              <td>{birthValue.province}</td>
            </tr>
            <tr>
              <td className="table-data">District:</td>
              <td>{birthValue.district}</td>
            </tr>
            <tr>
              <td className="table-data">Municipality:</td>
              <td>{birthValue.municipality}</td>
            </tr>
            <tr>
              <td className="table-data">Ward Number:</td>
              <td>{birthValue.ward_no}</td>
            </tr>
            <tr>
              <td className="table-data">Street Name:</td>
              <td>{birthValue.street_name}</td>
            </tr>
            <tr>
              <td className="table-data">Father's Name:</td>
              <td>{birthValue.fathers_name}</td>
            </tr>
            <tr>
              <td className="table-data">Mother's Name:</td>
              <td>{birthValue.mothers_name}</td>
            </tr>
            <tr>
              <td className="table-data">GrandFather's Name:</td>
              <td>{birthValue.grandfathers_name}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default BirthDetails;
