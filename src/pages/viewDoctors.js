import DoctorRecord from "../components/DoctorRecord";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase-config";

const head = {
  name: "name",
  specialisedIn: "Specialised In",
  fees: "Fees",
};

export default function ViewDoctors() {
  const [doctors, setDoctors] = useState([]);
  const doctorsCollection = collection(db, "doctors");

  useEffect(() => {
    console.log("useEfect Working");
    const getPatients = async () => {
      const data = await getDocs(doctorsCollection);

      setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    };
    getPatients();

    console.log(doctors);
  }, []);
  return (
    <div>
      <Header />
      {/* <DoctorRecord obj={head} style={{ marginBottom: "10px" }} /> */}

      <div style={{ margin: "10px" }}>
        <DoctorRecord obj={head} style={{ marginBottom: "10px" }} />

        {doctors.map((doctor) => {
          return <DoctorRecord obj={doctor} />;
        })}
      </div>
    </div>
  );
}
