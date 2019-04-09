import { CategoryModel } from './category.model';

export class GroupModel {
    id:string;
    name: string;
    categories: CategoryModel[] = [];
}
