import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'expenses/new',
    component: ExpenseComponent
  }
];

@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ExpensesModule { }
