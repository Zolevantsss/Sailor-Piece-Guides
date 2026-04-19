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
import { ancientFragmentArticle, mapPiecesArticle } from './guide_sea2';

export const allArticles: ArticlesRecord = {
    'All Haki Location': hakiArticle,
    'All Materials': materialsArticle,
    'All Location Guide Ancient Fragment': ancientFragmentArticle,
    'Map Pieces 🧩': mapPiecesArticle,
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
