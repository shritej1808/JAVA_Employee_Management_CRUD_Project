import axios from "axios";
const EMPLOYEE_S_API_BASE_URL = "http://localhost:8081/employees";
class EmployeeService {
  SaveEmployee(emplyoee) {
    return axios.post(EMPLOYEE_S_API_BASE_URL, emplyoee);
  }
  GetEmployee(emplyoee) {
    return axios.get(EMPLOYEE_S_API_BASE_URL);
  }
  GetEmployeeById(id) {
    return axios.get(EMPLOYEE_S_API_BASE_URL + "/" + id);
  }
  DeleteEmployee(id) {
    return axios.delete(EMPLOYEE_S_API_BASE_URL + "/" + id);
  }

  UpdateEmployee(employee, id) {
    return axios.put(EMPLOYEE_S_API_BASE_URL + "/" + id, employee);
  }
}
export default new EmployeeService();
