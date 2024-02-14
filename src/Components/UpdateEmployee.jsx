import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto justify-center shadow border-b">
      <div className="flex flex-col px-8 py-8">
        <div className="flex font-thin text-2xl tracking-wider justify-center">
          <h1>Update Employee</h1>
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
            onClick={updateEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-300 py-2 px-4"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/employeeList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-300 py-2 px-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
