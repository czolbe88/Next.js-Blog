export interface PostMetada {
    id: number;
    name: string;
    createdTime: string;
    webContentLink: string;
    size: number;
    trashed: boolean;
    mimeType: string;
    shouldDisplay: boolean;
}

export interface Post {
    title: string;
    date: string;
    category: string;
    htmlContent: string;
}