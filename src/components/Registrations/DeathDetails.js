import React, { useContext, useEffect } from "react";

import { InstructionContext } from "../ContextAPI/contextApi";

const DeathDetails = () => {
  const { deathForm, deathData, setDeathData } = useContext(InstructionContext);

  useEffect(() => {
    if (!deathData.length) return;
    localStorage.setItem("deathValue", JSON.stringify(deathData));
  }, [deathData]);

  function init() {
    const value = localStorage.getItem("deathValue");

    if (value) {
      setDeathData(JSON.parse(value));
    }
  }
  useEffect(() => init(), []);

  return (
    <div>
      <h4 className="text-danger text-center">
        Here are the details of the registered Death.
      </h4>
      <table className="table align-middle rounded-top bg-white p-2 m-2">
        <thead className="thead">
          <tr>
            <th>Title</th>
            <th>Information</th>
          </tr>
        </thead>
        {deathData.map((value, index) => (
          <tbody>
            <tr>
              <td className="table-data">Full Name:</td>
              <td>{value.fullname}</td>
            </tr>
            <tr>
              <td className="table-data">Date of Birth:</td>
              <td>{value.dob}</td>
            </tr>
            <tr>
              <td className="table-data">Birth Place:</td>
              <td>{value.birthplace}</td>
            </tr>
            <tr></tr>
            <tr>
              <td className="table-data">Date Of Death:</td>
              <td>{value.dod}</td>
            </tr>
            <tr>
              <td className="table-data">Death Place:</td>
              <td>{value.deathplace}</td>
            </tr>
            <tr>
              <td className="table-data">Father's Name:</td>
              <td>{value.fathers_name}</td>
            </tr>
            <tr>
              <td className="table-data">Mother's Name:</td>
              <td>{value.mothers_name}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default DeathDetails;
