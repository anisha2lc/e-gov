import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import MainPage from "../pages/MainPage";
import FillForm from "../components/Form/FillForm";

import InstructionContextProvider from "../components/ContextAPI/contextApi";
import NationalId from "../components/Form/NationalId";
import DeathRegistration from "../components/Registrations/DeathRegistration";
import DeathDetails from "../components/Registrations/DeathDetails";
import BirthDetails from "../components/Registrations/BirthDetails";
import NationalIdDetails from "../components/Registrations/NationalIdDetails";
import Login from "../pages/Login";

const MAIN_PAGE = {
  INDEX: "/dashboard",
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

const LOGIN = {
  INDEX: "/",
};

function App() {
  return (
    <InstructionContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path={MAIN_PAGE.INDEX} element={<MainPage />} />
            <Route path={LOGIN.INDEX} element={<Login />} />
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
