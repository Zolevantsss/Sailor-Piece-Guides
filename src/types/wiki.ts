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

export class WikiArticle implements ArticleData {
    content: string;
    sections: Section[];

    constructor(content: string, sections: Section[] = []) {
        this.content = content;
        this.sections = sections;
    }

    addSection(section: Section): this {
        this.sections.push(section);
        return this;
    }

    addSimpleSection(heading: string, text: string, image?: string): this {
        this.sections.push({ heading, text, image });
        return this;
    }
}

export type ArticlesRecord = Record<string, ArticleData>;
