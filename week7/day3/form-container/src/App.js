import React, { useState } from "react";
import FormComponent from "./FormComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    lactoseFree: false,
  });

  // handleChange function
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    window.location.href = `http://localhost:3000/?${queryParams}`;
  };

  return (
    <div>
      <h1>React Form Container</h1>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
