import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';

@Injectable()
export class GroupsSelectors {
    constructor(private store: Store<AppStore>) {

    }
    get groups() {
        return this.store.select((state) => state.groups);
    }
}
