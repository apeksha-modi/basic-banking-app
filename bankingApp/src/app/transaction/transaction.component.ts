import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions!: any[];
  constructor(private ts: CustomerserviceService) { 
    
  }

  ngOnInit(): void {
    this.ts.getTransactions().subscribe(result=>{
      this.transactions=result;
      console.log(this.transactions);
    });
  }

}

