import React from "react";
import { InputText } from "primereact/inputtext";
import "./GMName.css";

function GMName() {
  return (
    <div className="gm-name-container card flex flex-wrap justify-content-center gap-3">
      <span className="p-input-icon-left">
        <i className="pi pi-user" />
        <InputText placeholder="Enter Your GM Name" />
      </span>
    </div>
  );
}

export default GMName;