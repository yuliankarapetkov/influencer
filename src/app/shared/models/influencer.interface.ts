import { Category } from './category.interface';

export interface Influencer {
    id?: number;
    name: string;
    location: string | null;
    categoryId: number;
    category?: Category;
}