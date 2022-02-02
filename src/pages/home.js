import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase-config";

export default function Home() {
  const [patients, setPatients] = useState([]);
  const patientsCollection = collection(db, "patients");

  useEffect(() => {
    console.log("useEfect Working");
    const getPatients = async () => {
      const data = await getDocs(patientsCollection);

      setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    };
    getPatients();

    console.log(patients);
  }, []);
  return (
    <div>
      <Header />
      <h1 sx={{ display: "flex" }}>Welcome to The Hospital</h1>
      {patients.map((patient) => {
        return (
          <div>
            <p>{patient.name}</p>
            <p>{patient.age}</p>
            <p>{patient.date}</p>
            {/* <p>{patient. */}
          </div>
        );
      })}

      <button
        onClick={() => {
          console.log(patients);
        }}
      >
        Add Patient
      </button>
    </div>
  );
}
