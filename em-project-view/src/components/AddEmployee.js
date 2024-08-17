import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
const AddEmployee = () => {
  const [emplyoee, setEmplyoee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmplyoee({ ...emplyoee, [e.target.name]: value });
  };
  const Reset = (e) => {
    e.preventDefault();
    setEmplyoee({ id: "", name: "", phone: "", email: "" });
  };
  const SaveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.SaveEmployee(emplyoee)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
      <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
        <p>Add 🧑🏼‍💻 New Employee</p>
      </div>

      <div className="mx-10 my-2">
        <input
          type="text"
          name="name"
          value={emplyoee.name}
          onChange={(e) => handleChange(e)}
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Name"
        ></input>

        <input
          type="number"
          name="phone"
          value={emplyoee.phone}
          onChange={(e) => handleChange(e)}
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Phone"
        ></input>

        <input
          type="email"
          name="email"
          value={emplyoee.email}
          onChange={(e) => handleChange(e)}
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Email"
        ></input>
      </div>

      <div className="flex my-4 space-x-4 px-20">
        <button
          onClick={SaveEmployee}
          className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
        >
          {" "}
          Save{" "}
        </button>
        <button
          onClick={Reset}
          className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded"
        >
          {" "}
          Clear{" "}
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
        >
          {" "}
          Cancel{" "}
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
