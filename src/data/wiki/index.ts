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
import { powerArticle } from './power';
import { materialsArticle } from './materials';

export const allArticles: ArticlesRecord = {
    'All Haki Location': hakiArticle,
    'All Materials': materialsArticle,
    'Artifacts': artifactsArticle,
    'Ascension': ascensionArticle,
    'Aura/Cosmetics': cosmeticsArticle,
    'Builds': buildsArticle,
    'Power': powerArticle,
    'Progress': progressArticle,
    ...puzzleArticles,
    ...weaponArticles,
    ...generalArticles,
};
