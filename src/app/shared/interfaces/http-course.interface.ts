import { HttpAuthor } from "./http-author.interface";


export interface HttpCourse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: HttpAuthor[];
    isTopRated: boolean;
}