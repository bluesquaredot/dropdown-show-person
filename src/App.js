import React, { useState, useEffect } from "react";
import "./style.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import info from "./Info";

const { img, name, phone, adress } = info[0];

const Info = () => {
  return (
    <>
      <div className="bg-white rounded-md w-3/4 absolute bottom-0 ">
        <h5>name: {name}</h5>
        <h5>phone: {phone}</h5>
        <h5>adress: {adress}</h5>
        <img src={img} alt="image" width="50px" />
      </div>
    </>
  );
};

export default function App() {
  const [drop, setDrop] = useState(false);
  const [info, showInfo] = useState(false);

  const Person = () => {
    return (
      <>
        <div className="show-select ">
          <img
            src={img}
            alt="person"
            width="50px"
            className="rounded-full h-10 w-10"
          />
          <h5>John Doe</h5>
          <p className="cursor-pointer flex" onClick={() => showInfo(!info)}>show info</p>
        </div>
      </>
    );
  };

  return (
    <div className="flex justify-center bg-indigo-400 h-screen w-screen">
      <section className="bg-indigo-600 h-3/4 w-2/3 rounded mt-10 shadow-lg relative">
        <div className="flex select">
          <h3>Select a person</h3>
          <RiArrowDropDownLine
            onClick={() => setDrop(!drop)}
            className="icon"
          />
        </div>
        {drop ? <Person /> : null}
        {info ? <Info /> : null}
      </section>
    </div>
  );
}
