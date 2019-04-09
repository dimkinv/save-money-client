import { GroupModel } from '../../categories/models/group.model';
import { GroupsActions } from './groups.actions';

const initialState: GroupModel[] = [
    {
        id: '1',
        name: 'בית',
        categories: [
            {
                name: 'אוכל'
            },
            {
                name: 'רהיטים'
            }
        ]
    }
]

export function groupsReducer(state: GroupModel[] = initialState, action: GroupsActions) {
    switch (action) {
        default:
            return state;
    }
}
