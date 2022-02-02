import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase-config";

export default function Home() {
  const [patients, setPatients] = useState([]);
  const patientsCollection = collection(db, "patients");

  const [newName, addNewNAme] = useState("");
  const [newAge, addNewAge] = useState();

  const addPatient = async () => {
    await addDoc(patientsCollection, { name: newName, age: newAge });
  };

  const updatePatient = async (id, age) => {
    const useDoc = doc(db, "patients", id);
    const newFields = { age: age + 1 };
    await updateDoc(useDoc, newFields);
  };
  const deletePatient = async (id) => {
    const userDoc = doc(db, "patients", id);
    await deleteDoc(userDoc);
    // await addDoc(patientsCollection, { name: newName, age: newAge });
  };
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
      <h1>Welcome to The Hospital</h1>
      {patients.map((patient) => {
        return (
          <div>
            <p>{patient.name}</p>
            <p>{patient.age}</p>
            <p>{patient.date}</p>
            <button
              onClick={() => {
                deletePatient(patient.id);
              }}
            >
              Delete Patient
            </button>
            <button
              onClick={() => {
                updatePatient(patient.id, patient.age);
              }}
            >
              Update Patient
            </button>
            {/* <p>{patient. */}
          </div>
        );
      })}

      {/* <button
        onClick={() => {
          console.log(patients);
        }}
      >
        Add Patient
      </button> */}
      <div>
        <button onClick={addPatient}>Add Patient</button>

        <input
          type="text"
          placeholder="Patient Name"
          onChange={(e) => {
            addNewNAme(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Patient Age"
          onChange={(e) => {
            addNewAge(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
