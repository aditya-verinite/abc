import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent //implements OnInit//
  {
 
    

    private baseURL = "http://localhost:8080/api/v1/employees";
  employee : Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router) {
      
    }
     



  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/show-all-employees']);
  }

  ngOnInit(): void {}
    onSubmit(){  
      console.log(this.employee);
      // console.log(this.addEmpoyee.get("fname"))
      this.saveEmployee();
    }
  

}

