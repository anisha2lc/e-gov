import React, { useContext, useState } from "react";
import { InstructionContext } from "./contextApi";

const Instruction = () => {
  // const [openDetail, setOpenDetail] = useState(false);

  const { instructToggle } = useContext(InstructionContext);

  // const openDetailsModal = () => {
  //   setOpenDetail(true);
  // };

  if (!instructToggle) {
    return null;
  }
  return (
    <div className="bg-white">
      <p className="instruction-header mt-3 h-5">
        In order to register the information, you will need to follow
        instruction guidelines as below:
      </p>
      <ul className="list-group">
        <li className="list-group-item py-3">
          <span className="badge rounded-circle mx-3">1</span>
          <span className="text-left">
            Click the Register button which is on the top right corner of
            header.
          </span>
        </li>

        <li className="list-group-item py-3">
          <span className="badge rounded-circle mx-3">2</span>
          <span className="text-left">
            Modal with register option will appear.
          </span>
        </li>
        <li className="list-group-item py-3">
          <span className="badge rounded-circle mx-3">3</span>
          <span className="text-left">Click the required choice.</span>
        </li>
        <li className="list-group-item py-3">
          <span className="badge rounded-circle mx-3">4</span>
          <span className="text-left">
            Fill all the fields on form and submit, your information will be
            registered.
          </span>
        </li>
      </ul>
      {/* <button className="btn btn-primary p-2 m-2" onClick={openDetailsModal()}>
        Registration Details
      </button> */}
    </div>
  );
};

export default Instruction;
