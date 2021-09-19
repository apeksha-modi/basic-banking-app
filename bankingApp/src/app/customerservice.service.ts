import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customerModel } from './customerModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
   serverurl= "http://localhost:3030/api"

  constructor(private http:HttpClient) { 
    
  }
  getCustomers(){
    return this.http.get<customerModel[]>(this.serverurl+"/customers");
  }
  getTransactions(){
    return this.http.get<any[]>(this.serverurl+"/transaction");
  }
  getAcustomer(email:string){
    return this.http.get<customerModel[]>(this.serverurl+"/customers/"+email);
  }
  transact(email1:string, email2:string, value:number){
    return this.http.post<any>(this.serverurl+"/maketransactions",{
      sender:email1,
      receiver:email2,
      ammount:value
    });
  }
}
