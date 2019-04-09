import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastExpensesComponent } from './last-expenses/last-expenses.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'last-expenses',
    component: LastExpensesComponent
  }
];

@NgModule({
  declarations: [LastExpensesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [LastExpensesComponent]
})
export class LastExpensesModule { }
