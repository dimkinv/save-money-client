import { NgModule } from '@angular/core';
import { ExpensesModule } from './expenses/expenses.module';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesModule } from './categories/categories.module';
import { LastExpensesModule } from './last-expenses/last-expenses.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'last-expenses'
  }
];

@NgModule({
  imports: [
    ExpensesModule,
    CategoriesModule,
    LastExpensesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
