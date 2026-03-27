export interface Section {
    heading: string;
    text: string;
    image?: string;
    mediaType?: 'image' | 'video';
    imageSize?: 'small' | 'medium' | 'large';
}

export interface ArticleData {
    content: string;
    sections: Section[];
}

export type ArticlesRecord = Record<string, ArticleData>;
