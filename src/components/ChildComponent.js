import React from "react";
import { useMyContext } from "../context/MyContext";

const ChildComponent = () => {
  const myVariable = useMyContext();

  return (
    <>
      <div>
        <h2>Komponen Anak</h2>
        <p>Nilai dari Context: {myVariable.value}</p>
      </div>
    </>
  );
};

export default ChildComponent;
