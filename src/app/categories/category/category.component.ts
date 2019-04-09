import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from '../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: CategoryModel = new CategoryModel();

  constructor() { }

  ngOnInit() {
  }

}
