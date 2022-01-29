import "./App.css";

import SignIn from "./pages/login";
import AddDoctor from "./pages/addDoctor"
import AddPatient from "./pages/addPatient"
import ViewAppointments from "./pages/viewAppointments";
import Home from "./pages/home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/sign_in" element={<SignIn/>} />
        <Route exact path="/addDoctor" element={<AddDoctor/>} />
        <Route exact path="/addPatient" element={<AddPatient/>} />
        <Route exact path="/viewAppointments" element={<ViewAppointments/>} />

      </Routes>
    </Router>
  );
}

export default App;
