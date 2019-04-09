import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { AddButtonComponent } from './add-button/add-button.component';
import { ExpenseComponent } from './expense/expense.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddButtonComponent,
    ExpenseComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    AddButtonComponent,
    ExpenseComponent
  ]
})
export class SharedModule { }
