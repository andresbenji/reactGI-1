import React from "react";

const BasicInfo = ({ person }) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>{person.name}</h2>
      <p>
        <strong>Number:</strong> {person.number}
      </p>
      <p>
        <strong>DOB:</strong> {person.dob}
      </p>
    </div>
  );
};

export default BasicInfo;
