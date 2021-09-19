import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customerModel } from '../customerModel';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  id!: any;
  customer!:customerModel;
  customers!: customerModel[];
  sender!:string;
  receiver!:string;
  ammount!:number;

  constructor(private cs:CustomerserviceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
    this.cs.getAcustomer(this.id).subscribe(result=>{
      this.customer=result[0];
      console.log(this.customer)
      this.cs.getCustomers().subscribe(result=>{
        this.customers=result;
        console.log(this.customers);
      });

    })
  }

  maketransactions(): void{
    console.log(this.ammount)
    console.log(this.receiver)
    console.log(this.customer.email)
    this.cs.transact(this.customer.email,this.receiver,this.ammount).subscribe(result=>{
      console.log(result)
    })
    
  }

}
