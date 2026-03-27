import type { ArticlesRecord } from '../../types/wiki';
import { hakiArticle } from './haki';
import { artifactsArticle } from './artifacts';
import { ascensionArticle } from './ascension';
import { cosmeticsArticle } from './cosmetics';
import { buildsArticle } from './builds';
import { progressArticle } from './progress';
import { puzzleArticles } from './puzzles';
import { weaponArticles } from './weapons';
import { generalArticles } from './general';

export const allArticles: ArticlesRecord = {
    'All Haki Location': hakiArticle,
    'Artifacts': artifactsArticle,
    'Ascension': ascensionArticle,
    'Aura/Cosmetics': cosmeticsArticle,
    'Builds': buildsArticle,
    'Progress': progressArticle,
    ...puzzleArticles,
    ...weaponArticles,
    ...generalArticles,
};
