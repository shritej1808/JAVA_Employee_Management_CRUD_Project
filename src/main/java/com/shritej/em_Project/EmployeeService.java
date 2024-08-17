package com.shritej.em_Project;

import java.util.List;

public interface EmployeeService {

    String createEmployee(Employee employee);

    List<Employee> readEmployees();

    boolean deleteEmployee(Long id);

    Employee readEmployees(Long id);

    String updateEmplyoees(Long id, Employee employee);
}
