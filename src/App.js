import "./App.css";

import SignIn from "./pages/login";
import AddDoctor from "./pages/addDoctor"
import AddPatient from "./pages/addPatient"
import ViewAppointments from "./pages/viewAppointments";
// import Test from "./pages/Test"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<HomePage/>} /> */}
        <Route exact path="/sign_in" element={<SignIn/>} />
        <Route exact path="/addDoctor" element={<AddDoctor/>} />
        <Route exact path="/addPatient" element={<AddPatient/>} />
        <Route exact path="/viewAppointments" element={<ViewAppointments/>} />

      </Routes>
    </Router>
  );
}

export default App;
