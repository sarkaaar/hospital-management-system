import SignIn from "./pages/login";
import AddDoctor from "./pages/addDoctor";
import AddPatient from "./pages/addPatient";
import ViewAppointments from "./pages/viewAppointments";
import Home from "./pages/home";
import Reports from "./pages/reports";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewDoctors from "./pages/viewDoctors";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign_in" element={<SignIn />} />
        <Route exact path="/addDoctor" element={<AddDoctor />} />
        <Route exact path="/addPatient" element={<AddPatient />} />
        <Route exact path="/viewAppointments" element={<ViewAppointments />} />
        <Route exact path="/viewReports" element={<Reports />} />
        <Route exact path="/viewDoctors" element={<ViewDoctors />} />
      </Routes>
    </Router>
  );
}

export default App;
