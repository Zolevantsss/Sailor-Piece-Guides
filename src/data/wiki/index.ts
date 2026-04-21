import type { ArticlesRecord } from '../../types/wiki';
import { hakiArticle } from './haki';
import { artifactsArticle } from './artifacts';
import { ascensionArticle } from './ascension';
import { cosmeticsArticle } from './cosmetics';
import { buildsArticle } from './builds';
import { progressArticle } from './progress';
import { puzzleArticles } from './puzzles';
import { weaponArticles } from './weapons';
import { weaponSea2Articles } from './weapons_sea2';
import { relicsArticle } from './relics_sea2';
import { bloodlinesArticle } from './bloodlines_sea2';
import { generalArticles } from './general';
import { powerArticle } from './power';
import { materialsArticle } from './materials';
import { materialsSea2Article } from './materials_sea2';
import { ancientFragmentArticle, mapPiecesArticle } from './guide_sea2';
import { easterArticle } from './easter';
import { seabeastArticles } from './seabeast';

export const allArticles: ArticlesRecord = {
    'All Haki Location': hakiArticle,
    'All Materials': materialsArticle,
    'All Materials Sea 2': materialsSea2Article,
    'Easter Event 🥚': easterArticle,
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
    ...weaponSea2Articles,
    'Relics': relicsArticle,
    'Bloodlines': bloodlinesArticle,
    ...seabeastArticles,
    ...generalArticles,
};
