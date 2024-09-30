import React from "react";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});

  const validationErrorsObj = (formData) => {
    let errorsObject = {};
    if (formData.email === "") {
      errorsObject.email = "*email is required";
    }
    if (formData.password === "") {
      errorsObject.password = "*password is required";
    }

    return errorsObject;
  };


  const ErrorsObject = validationErrorsObj(formData);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(e.target.name, e.target.value);
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(ErrorsObject).length === 0) {
      console.log(formData);
      setFormData({ email: "", password: "" });
      setFormErrors({});
    } else {
      setFormErrors(ErrorsObject);
      console.log(formErrors);
    }
  };

  return (
    <div className="l-form flex justify-center w-1/2 h-[50%] border p-3 ">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          className="border-black"
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
        <input
          className="border-black"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
        />
        {formErrors.password && <p>{formErrors.password}</p>}

        <button className="bg-blue-400" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
