import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsSelectors } from './groups/groups.selectors';

@NgModule({
  declarations: [],
  providers:[
    GroupsSelectors
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
