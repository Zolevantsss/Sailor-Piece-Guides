import { WikiArticle } from '../../types/wiki';

// Import Ancient Fragment images
import starter1 from '../../assets/Sea 1/ancientfragment/starter1.png';
import starter2 from '../../assets/Sea 1/ancientfragment/starter2.png';
import desert1 from '../../assets/Sea 1/ancientfragment/desert1.png';
import desert2 from '../../assets/Sea 1/ancientfragment/desert2.png';
import snow from '../../assets/Sea 1/ancientfragment/snow.png';
import shibuya1 from '../../assets/Sea 1/ancientfragment/shibuya1.png';
import shibuya2 from '../../assets/Sea 1/ancientfragment/shibuya2.png';
import hollow1 from '../../assets/Sea 1/ancientfragment/hollow1.png';
import hollow2 from '../../assets/Sea 1/ancientfragment/hollow2.png';
import shinjuku1 from '../../assets/Sea 1/ancientfragment/shinjuku.png';
import shinjuku2 from '../../assets/Sea 1/ancientfragment/shinjuku2.png';
import slime1 from '../../assets/Sea 1/ancientfragment/slime1.png';
import slime2 from '../../assets/Sea 1/ancientfragment/slime2.png';
import academy1 from '../../assets/Sea 1/ancientfragment/academy1.png';
import academy2 from '../../assets/Sea 1/ancientfragment/academy2.png';
import judgement1 from '../../assets/Sea 1/ancientfragment/judgement1.png';
import judgement2 from '../../assets/Sea 1/ancientfragment/judgement2.png';
import ninja from '../../assets/Sea 1/ancientfragment/ninja.png';
import lawless1 from '../../assets/Sea 1/ancientfragment/lawless1.png';
import lawless2 from '../../assets/Sea 1/ancientfragment/lawless2.png';

export const ancientFragmentArticle = new WikiArticle(
    'Ancient Fragments are essential items for progression in Sea 2. You need **2 Ancient Fragments** to proceed. Note that they **randomly spawn** across the maps shown below.'
)
.addSimpleSection('Starter Island', 'Location of Ancient Fragments on Starter Island.', starter1)
.addSimpleSection('Starter Island', 'Additional locations on Starter Island.', starter2)
.addSimpleSection('Desert Island', 'Location of Ancient Fragments on Desert Island.', desert1)
.addSimpleSection('Desert Island', 'Additional locations on Desert Island.', desert2)
.addSimpleSection('Snow Island', 'Location of Ancient Fragments on Snow Island.', snow)
.addSimpleSection('Shibuya', 'Location of Ancient Fragments in Shibuya.', shibuya1)
.addSimpleSection('Shibuya', 'Additional locations in Shibuya.', shibuya2)
.addSimpleSection('Hollow Island', 'Location of Ancient Fragments on Hollow Island.', hollow1)
.addSimpleSection('Hollow Island', 'Additional locations on Hollow Island.', hollow2)
.addSimpleSection('Shinjuku', 'Location of Ancient Fragments in Shinjuku.', shinjuku1)
.addSimpleSection('Shinjuku', 'Additional locations in Shinjuku.', shinjuku2)
.addSimpleSection('Slime Island', 'Location of Ancient Fragments on Slime Island.', slime1)
.addSimpleSection('Slime Island', 'Additional locations on Slime Island.', slime2)
.addSimpleSection('Academy Island', 'Location of Ancient Fragments on Academy Island.', academy1)
.addSimpleSection('Academy Island', 'Additional locations on Academy Island.', academy2)
.addSimpleSection('Judgement Island', 'Location of Ancient Fragments on Judgement Island.', judgement1)
.addSimpleSection('Judgement Island', 'Additional locations on Judgement Island.', judgement2)
.addSimpleSection('Ninja Island', 'Location of Ancient Fragments on Ninja Island.', ninja)
.addSimpleSection('Lawless Island', 'Location of Ancient Fragments on Lawless Island.', lawless1)
.addSimpleSection('Lawless Island', 'Additional locations on Lawless Island.', lawless2);

export const mapPiecesArticle = new WikiArticle(
    'To progress further in Sea 2, you must collect all **7 Map Pieces**. These pieces are dropped by various bosses throughout the world.'
)
.addSimpleSection(
    '🧩 Map Piece 1',
    'Can be obtained by defeating:\n• **Saber Boss**\n• **Yuji Boss**'
)
.addSimpleSection(
    '🧩 Map Piece 2',
    'Can be obtained by defeating:\n• **Gojo Boss**\n• **Sukuna Boss**'
)
.addSimpleSection(
    '🧩 Map Piece 3',
    'Can be obtained by defeating:\n• **Jinwoo Boss**\n• **Qin Shi Boss**'
)
.addSimpleSection(
    '🧩 Map Piece 4',
    'Can be obtained by defeating:\n• **Ragna Boss**\n• **Alucard Boss**'
)
.addSimpleSection(
    '🧩 Map Piece 5',
    'Can be obtained by defeating:\n• **Aizen Boss**\n• **Rimuru Boss**'
)
.addSimpleSection(
    '🧩 Map Piece 6',
    'Can be obtained by defeating:\n• **Ichigo Boss**\n• **Blessed Maiden Boss**\n• **Strongest Today**'
)
.addSimpleSection(
    '🧩 Map Piece 7',
    'Can be obtained by defeating:\n• **Gilgamesh Boss**\n• **Strongest History**'
);
