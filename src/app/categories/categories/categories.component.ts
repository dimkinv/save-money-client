import { Component, OnInit } from '@angular/core';
import { GroupModel } from '../models/group.model';
import { GroupsSelectors } from 'src/app/store/groups/groups.selectors';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private groupsSelectors: GroupsSelectors) { }
  ngOnInit() {}

}
