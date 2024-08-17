package com.shritej.em_Project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employees")
@CrossOrigin("http://localhost:3000/")
public class EmpController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<String> createEmployee(@RequestBody Employee employee) {
        String result = employeeService.createEmployee(employee);
        return ResponseEntity.ok(result);
    }

    @GetMapping
    public ResponseEntity<List<Employee>> readAllEmployees() {
        List<Employee> employees = employeeService.readEmployees();
        return ResponseEntity.ok(employees);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> readEmployeesById(@PathVariable Long id) {
        Employee employee = employeeService.readEmployees(id);
        return ResponseEntity.ok(employee);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        boolean result = employeeService.deleteEmployee(id);
        if (result) {
            return ResponseEntity.ok("Deleted Successfully");
        } else {
            return ResponseEntity.status(404).body("Employee Not Found");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        String result = employeeService.updateEmplyoees(id, employee);
        return ResponseEntity.ok(result);
    }
}
