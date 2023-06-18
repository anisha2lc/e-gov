import React, { useContext } from "react";

import { InstructionContext } from "./contextApi";

const InstructionToggler = () => {
  const { setInstructToggle, instructToggle } = useContext(InstructionContext);

  const checkForInstruction = (event) => {
    setInstructToggle(event.target.checked);
  };

  const instruction = instructToggle ? "Hide instruction" : "Show instruction";

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <label className="switch d-inline-block position-relative fw-bold">
          <input
            type="checkbox"
            defaultChecked={instructToggle}
            onChange={(event) => checkForInstruction(event)}
          />
          <span className="slider round position-absolute" />
        </label>
      </div>
      <div>
        <div className="instruction-condition row fw-normal mx-2">
          {instruction}
        </div>
      </div>
    </div>
  );
};

export default InstructionToggler;
