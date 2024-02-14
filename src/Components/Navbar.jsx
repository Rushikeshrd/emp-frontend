import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <Link to="/EmployeeList">
          <p className="text-white font-bold">Employee Management System </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
