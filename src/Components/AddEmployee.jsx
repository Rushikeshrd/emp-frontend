import React, { useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const resetData = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto justify-center shadow border-b">
      <div className="flex flex-col px-8 py-8">
        <div className="flex font-thin text-2xl tracking-wider justify-center">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            className="border h-8 w-60 md:w-45 lg:w-96 mt-2 px-2 py-2"
            type="text"
            name="firstName"
            required
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            className="border h-8 w-60 md:w-45 lg:w-96 mt-2 px-2 py-2"
            type="text"
            name="lastName"
            required
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            className="border h-8 w-60 md:w-45 lg:w-96 mt-2 px-2 py-2"
            type="text"
            name="emailId"
            required
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex gap-4 items-center justify-center h-14 w-full my-2">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-300 py-2 px-4"
          >
            Save
          </button>
          <button
            onClick={resetData}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-300 py-2 px-4"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
