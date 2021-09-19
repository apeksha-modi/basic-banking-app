import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [{path:"",redirectTo:"/home", pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"customers", component:CustomerComponent},
{path:"transaction",component:TransactionComponent},
{path:"customers/:id",component:CustomerdetailsComponent},
{path:"**", component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
