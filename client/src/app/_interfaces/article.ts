export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author?: string;
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt: Date;
    content?: string;
}

