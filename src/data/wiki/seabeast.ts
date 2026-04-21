import { WikiArticle } from '../../types/wiki';
import type { ArticlesRecord } from '../../types/wiki';
import krakenImg from '../../assets/seabeast/kraken.png';
import seabeastImg from '../../assets/seabeast/seabeast.png';

export const seabeastArticles: ArticlesRecord = {
    'Seabeast/Kraken': new WikiArticle(
        'Sea Bosses are massive terrors that haunt the open waters of Sea 2. Defeating them is the primary way to obtain legendary items like the Dragon Goddess and the Kraken Armor.'
    )
    .addSimpleSection(
        '🌊 Spawn Mechanics',
        'Sea Bosses (Serpent and Kraken) only spawn in **Sea 2**. To find them, you must swim or dash away from land into the deep sea. When you enter the correct zone, a notification will appear at the top of your screen.\n\n' +
        '**Requirements:**\n' +
        '• **Minimum Bounty:** 500,000\n' +
        '• **Distance:** 200–600 studs away from any island\n' +
        '• **Concurrency:** One Kraken and one Serpent can exist at the same time.',
        seabeastImg
    )
    .addSimpleSection(
        '🐍 Sea Serpent Details',
        'The Sea Serpent is a formidable mid-sea boss with **750,000 HP**. It is a reliable source for endgame materials and rerolls.\n\n' +
        '**Guaranteed Drops:**\n' +
        '• **Bloodline Stone:** 100%\n' +
        '• **Clan Reroll:** 100%\n\n' +
        '**Rare Drops:**\n' +
        '• **Blossom Outfit:** 6.73%\n' +
        '• **Kraken Armor:** 3.37%\n' +
        '• **Dragon Goddess:** 2.02%'
    )
    .addSimpleSection(
        '🦈 Effective Spawning Strategy',
        'To maximize your chances of spawning a Sea Beast, it is highly recommended to play with a full group of friends.\n\n' +
        '**12-Player Group Requirements:**\n' +
        '• **8 People:** 9M–10M Bounty\n' +
        '• **3 People:** 10M–11M Bounty\n' +
        '• **1 Person:** 20M Bounty\n\n' +
        '**Note:** If 12 players gather in the same location, their total combined bounty will significantly increase the Sea Beast spawn rate.',
        krakenImg
    ),
};
