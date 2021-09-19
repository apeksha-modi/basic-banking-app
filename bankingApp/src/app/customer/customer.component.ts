import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customerModel } from '../customerModel';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers!: customerModel[];

  constructor(private cs:CustomerserviceService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.cs.getCustomers().subscribe(result=>{
      this.customers=result;
      console.log(this.customers);
    });

  }
  gotocustomerdetails(email:string): void {
    console.log(email)
    this.router.navigate(["customers",email])
    
  }

}
