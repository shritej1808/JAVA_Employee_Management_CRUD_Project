import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [Employees, setEmplyoee] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.GetEmployee();
        console.log("Fetched Employees:", response.data); // Log the fetched data
        setEmplyoee(response.data);
      } catch (error) {
        console.log("Error fetching employees:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.DeleteEmployee(id)
      .then((response) => {
        if (Employees) {
          setEmplyoee((prevElement) => {
            return prevElement.filter((Employee) => Employee.id !== id);
          });
        }
        navigate("/");
      })
      .catch((error) => {
        console.log("Error deleting employee:", error);
      });
  };

  const EditEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <div className="container mx-auto my-8">
      <div>
        <button
          onClick={() => navigate("/addEmplyoee")}
          className="bg-slate-600 hover:bg-blue-700 mx-20 my-12 font-semibold px-20 py-2 rounded"
        >
          Add Employee 👨🏼‍💻
        </button>
      </div>

      <div>
        <table className="shadow mx-20">
          <thead className="bg-slate-600">
            <tr>
              <th className="px-6 py-3 uppercase tracking-wide">Name</th>
              <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
              <th className="px-6 py-3 uppercase tracking-wide">Email</th>
              <th className="px-6 py-3 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {Employees.map((Employee) => (
                <tr
                  key={Employee.id}
                  className="hover:bg-white hover:text-black"
                >
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    {Employee.name}
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    {Employee.phone}
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    {Employee.email}
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <a
                      onClick={(e) => EditEmployee(e, Employee.id)}
                      className="hover:text-green-500 hover:cursor-pointer"
                    >
                      Edit 📝
                    </a>
                    <a
                      onClick={(e) => deleteEmployee(e, Employee.id)}
                      className="hover:text-red-500 hover:cursor-pointer"
                    >
                      Delete 🗑️
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {loading && <p className="text-center my-4">Loading employees...</p>}
      </div>
    </div>
  );
};

export default EmployeeList;
