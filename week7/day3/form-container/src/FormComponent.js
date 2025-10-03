import React from "react";

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="First Name"
        onChange={handleChange}
      />
      <br />

      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={handleChange}
      />
      <br />

      <input
        type="number"
        name="age"
        value={formData.age}
        placeholder="Age"
        onChange={handleChange}
      />
      <br />

      {/* Gender */}
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />{" "}
        Female
      </label>
      <br />

      {/* Destination */}
      <select
        name="destination"
        value={formData.destination}
        onChange={handleChange}
      >
        <option value="">-- Choose Destination --</option>
        <option value="Japan">Japan</option>
        <option value="Brazil">Brazil</option>
        <option value="USA">USA</option>
      </select>
      <br />

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        />{" "}
        Lactose Free
      </label>
      <br />

      <button type="submit">Submit</button>

      {/* Preview entered data */}
      <h3>Preview:</h3>
      <p>
        {formData.firstName} {formData.lastName}, {formData.age} years old,{" "}
        {formData.gender}, going to {formData.destination},{" "}
        {formData.lactoseFree ? "Lactose Free" : "Not Lactose Free"}
      </p>
    </form>
  );
}

export default FormComponent;
