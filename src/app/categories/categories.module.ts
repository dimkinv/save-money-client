import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { GroupComponent } from './group/group.component';
import { CategoriesComponent } from './categories/categories.component';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule, MatDividerModule, MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { StoreModule } from '../store/store.module';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent
  }
];

@NgModule({
  declarations: [CategoryComponent, GroupComponent, CategoriesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    StoreModule
  ]
})
export class CategoriesModule { }
