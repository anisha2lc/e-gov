import React, { useContext, useEffect } from "react";

import { InstructionContext } from "../ContextAPI/contextApi";

const NationalIdDetails = () => {
  const { nationForm, nationalIdData, setNationalIdData } =
    useContext(InstructionContext);

  console.log(nationalIdData, "nID");

  useEffect(() => {
    if (!nationalIdData.length) return;
    localStorage.setItem("nationIdValue", JSON.stringify(nationalIdData));
  }, [nationalIdData]);

  function init() {
    const value = localStorage.getItem("nationIdValue");

    if (value) {
      setNationalIdData(JSON.parse(value));
    }
  }
  useEffect(() => init(), []);

  return (
    <div>
      <h4 className="text-danger text-center">
        Here are the details of the registered National Id.
      </h4>
      <table className="table align-middle rounded-top bg-white p-2 m-2">
        <thead className="thead">
          <tr>
            <th>Title</th>
            <th>Information</th>
          </tr>
        </thead>
        {nationalIdData.map((value, index) => (
          <tbody key={index}>
            <tr>
              <td className="table-data">Full Name:</td>
              <td>{value.fullname}</td>
            </tr>
            <tr>
              <td className="table-data">Date of Birth:</td>
              <td>{value.dob}</td>
            </tr>
            <tr></tr>
            <tr>
              <td className="table-data">province:</td>
              <td>{value.province}</td>
            </tr>
            <tr>
              <td className="table-data">District:</td>
              <td>{value.district}</td>
            </tr>
            <tr>
              <td className="table-data">Municipality:</td>
              <td>{value.municipality}</td>
            </tr>
            <tr>
              <td className="table-data">Ward Number:</td>
              <td>{value.ward_no}</td>
            </tr>
            <tr>
              <td className="table-data">Street Name:</td>
              <td>{value.street_name}</td>
            </tr>
            {/* citizenship_number: "", issue_date: "", */}
            <tr>
              <td className="table-data">Citizenship Number:</td>
              <td>{value.citizenship_number}</td>
            </tr>
            <tr>
              <td className="table-data">Issue Date:</td>
              <td>{value.issue_date}</td>
            </tr>
            <tr>
              <td className="table-data">Father's Name:</td>
              <td>{value.fathers_name}</td>
            </tr>
            <tr>
              <td className="table-data">Mother's Name:</td>
              <td>{value.mothers_name}</td>
            </tr>
            <tr>
              <td className="table-data">GrandFather's Name:</td>
              <td>{value.grandfathers_name}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default NationalIdDetails;
