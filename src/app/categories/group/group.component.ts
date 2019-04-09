import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { GroupModel } from '../models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() group: GroupModel = new GroupModel();

  constructor() { }

  ngOnInit() {
  }

}
