import { Action } from '@ngrx/store';
export enum GroupsAction {
    GET_GROUPS = '[CATEGORIES] Get groups'
}


export class GetGroups implements Action {
    readonly type = GroupsAction.GET_GROUPS;
}

export type GroupsActions = GetGroups;
