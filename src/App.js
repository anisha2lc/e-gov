import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "../src/App.css";

import MainPage from "./components/MainPage";
import FillForm from "./components/FillForm";

import InstructionContextProvider from "./components/contextApi";
import NationalId from "./components/NationalId";
import DeathRegistration from "./components/DeathRegistration";
import DeathDetails from "./components/DeathDetails";
import BirthDetails from "./components/BirthDetails";
import NationalIdDetails from "./components/NationalIdDetails";

const MAIN_PAGE = {
  INDEX: "/",
};

const FORM_FILL_PAGE = {
  INDEX: "/fill-form",
};

const DEATH_REGISTRATION_PAGE = {
  INDEX: "/death-registration",
};

const National_ID = {
  INDEX: "/national-id",
};

function App() {
  return (
    <InstructionContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path={MAIN_PAGE.INDEX} element={<MainPage />} />
            <Route path={FORM_FILL_PAGE.INDEX} element={<FillForm />} />
            <Route
              path={DEATH_REGISTRATION_PAGE.INDEX}
              element={<DeathRegistration />}
            />
            <Route path={National_ID.INDEX} element={<NationalId />} />
            <Route
              path="/national-id-details"
              element={<NationalIdDetails />}
            />
            <Route path="/death-details" element={<DeathDetails />} />
            <Route path="/birth-details" element={<BirthDetails />} />
          </Routes>
        </Router>
      </div>
    </InstructionContextProvider>
  );
}

export default App;
