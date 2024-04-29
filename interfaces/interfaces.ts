interface Metadata {
    id: number;
    name: string;
    createdTime: string;
    // webContentLink: string;
    size: number;
    trashed: boolean;
    mimeType: string;
}

export interface PostMetada extends Metadata {
}

export interface ImageMetada extends Metadata {
    thumbnailLink: string
}

export interface Post {
    title: string;
    // date: string;
    category: string;
    htmlContent: string;
}