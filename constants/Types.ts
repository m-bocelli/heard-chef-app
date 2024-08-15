export const API_BASE_URL: string =
    "https://heard-chef-api20240815032419.azurewebsites.net/api";

export interface Recipe {
    id: number;
    image1: string;
    title: string;
    netTime: number;
    rating: number;
    numReviews: number;
    createdBy: string;
    createdDate: string;
    updatedBy: string;
    updatedDate: string;
}

export interface User {
    id: number;
    username: string;
    herdId: string;
    userAccountId: number;
    createdBy: string;
    createdDate: string;
    updatedBy: string;
    updatedDate: string;
}
