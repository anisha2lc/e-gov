import React, { createContext, useState } from "react";

import useLocalStorage from "../../useLocalStorage";

export const InstructionContext = createContext();

const InstructionContextProvider = ({ children }) => {
  const initialValue = {
    fullname: "",
    dob: "",
    sex: "",
    male: "",
    female: "",
    other: "",
    province: "",
    district: "",
    municipality: "",
    ward_no: "",
    street_name: "",
    fathers_name: "",
    mothers_name: "",
    grandfather_name: "",
    grandmother_name: "",
    yes: "",
    no: "",
    contact:""
  };

  const initialDeathValue = {
    fullname: "",
    birthplace: "",
    dob: "",
    dod: "",
    deathplace: "",
    fathers_name: "",
    mothers_name: "",
  };

  const NationalIdInitialValue = {
    fullname: "",
    dob: "",
    sex: "",
    male: "",
    female: "",
    other: "",
    province: "",
    district: "",
    municipality: "",
    ward_no: "",
    street_name: "",
    citizenship_number: "",
    issue_date: "",
    fathers_name: "",
    mothers_name: "",
    grandfather_name: "",
    grandmother_name: "",
    yes: "",
    no: "",
    migrated_from: "",
    migrated_to: "",
  };

  const [nationForm, setNationForm] = useState(NationalIdInitialValue);

  const [deathForm, setDeathForm] = useState(initialDeathValue);

  const [form, setForm] = useState(initialValue);
  const [instructToggle, setInstructToggle] = useLocalStorage(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState(false);
  const [birthRegistration, setBirthRegistration] = useState(0);
  const [deathRegistration, setDeathRegistration] = useState(0);
  const [nationalIdRegistration, setNationalIdRegistration] = useState(0);

  const [birthData, setBirthData] = useState([]);
  const [deathData, setDeathData] = useState([]);
  const [nationalIdData, setNationalIdData] = useState([]);

  return (
    <InstructionContext.Provider
      value={{
        instructToggle,
        setInstructToggle,
        isModalOpen,
        setIsModalOpen,
        modalDetail,
        setModalDetail,
        form,
        setForm,
        birthRegistration,
        setBirthRegistration,
        deathRegistration,
        setDeathRegistration,
        nationalIdRegistration,
        setNationalIdRegistration,
        deathForm,
        setDeathForm,
        nationForm,
        setNationForm,
        birthData,
        setBirthData,
        deathData,
        setDeathData,
        nationalIdData,
        setNationalIdData,
      }}
    >
      {children}
    </InstructionContext.Provider>
  );
};

export default InstructionContextProvider;
