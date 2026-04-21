import { WikiArticle } from '../../types/wiki';
import type { ArticlesRecord } from '../../types/wiki';
import slimePiece1 from '../../assets/Sea 1/slimepuzzle/piece1.png';
import slimePiece2 from '../../assets/Sea 1/slimepuzzle/piece2.png';
import slimePiece3 from '../../assets/Sea 1/slimepuzzle/piece3.png';
import slimePiece4 from '../../assets/Sea 1/slimepuzzle/piece4.png';
import slimePiece5 from '../../assets/Sea 1/slimepuzzle/piece5.png';
import slimePiece6 from '../../assets/Sea 1/slimepuzzle/piece6.png';
import slimePiece7 from '../../assets/Sea 1/slimepuzzle/piece7.png';
import ancientPiece1 from '../../assets/Sea 1/ancientpuzzle/piece1.png';
import ancientPiece2 from '../../assets/Sea 1/ancientpuzzle/piece2.png';
import ancientPiece3 from '../../assets/Sea 1/ancientpuzzle/piece3.png';
import ancientPiece4 from '../../assets/Sea 1/ancientpuzzle/piece4.png';
import ancientPiece5 from '../../assets/Sea 1/ancientpuzzle/piece5.mov';
import ancientPiece6 from '../../assets/Sea 1/ancientpuzzle/piece6.png';
import demonitePiece1 from '../../assets/Sea 1/demonitepuzzle/piece1.png';
import demonitePiece2 from '../../assets/Sea 1/demonitepuzzle/piece2.png';
import hogquestNpc from '../../assets/Sea 1/hogquest/hogquestnpc.png';
import hogquestPiece1 from '../../assets/Sea 1/hogquest/piece1.mov';
import hogquestPiece2 from '../../assets/Sea 1/hogquest/piece2.mov';
import hogquestPiece3 from '../../assets/Sea 1/hogquest/piece3.mov';
import hogquestPiece4 from '../../assets/Sea 1/hogquest/piece4.mov';
import hogquestPiece5 from '../../assets/Sea 1/hogquest/piece5.mov';
import hogquestPiece6 from '../../assets/Sea 1/hogquest/piece6.mov';

export const puzzleArticles: ArticlesRecord = {
    'Slime Puzzle': new WikiArticle(
        'Find 7 Slime Pieces around the map! The quest NPC is located at Slime Island. Collect all pieces to complete the slime puzzle quest.'
    )
    .addSimpleSection(
        '📍 Slime Piece Locations',
        'Locate all 7 pieces to unlock the secrets of the Slime Island.'
    )
    .addSimpleSection('Slime Piece 1 - Desert Island', '**Location:** Under a dinosaur', slimePiece1)
    .addSimpleSection('Slime Piece 2 - Snow Island', '**Location:** Behind a tree', slimePiece2)
    .addSimpleSection('Slime Piece 3 - Starter Island', '**Location:** On a tree', slimePiece3)
    .addSimpleSection('Slime Piece 4 - Jungle Island', '**Location:** On top of a hut/outpost', slimePiece4)
    .addSimpleSection('Slime Piece 5 - Shibuya', '**Location:** Near Gojo', slimePiece5)
    .addSimpleSection('Slime Piece 6 - Hueco Mundo', '**Location:** In between a building', slimePiece6)
    .addSimpleSection('Slime Piece 7 - Shinjuku', '**Location:** Near Sukuna V2 Spawn Arena', slimePiece7),

    'Demonite Puzzle': new WikiArticle(
        'Find 2 Demonite pieces around the world! These rare puzzle pieces are part of the Demonite Core crafting requirements.'
    )
    .addSimpleSection(
        '🧩 Piece Locations',
        'These pieces are essential for progressing through the Anos spec questline.'
    )
    .addSimpleSection('Demonite Piece 1', 'First demonite puzzle piece. Required for Demonite Core crafting.', demonitePiece1)
    .addSimpleSection('Demonite Piece 2', 'Second demonite puzzle piece. Required for Demonite Core crafting.', demonitePiece2),

    'Hogyoku Quest Puzzle': new WikiArticle(
        'The Hogyoku Quest is a multi-stage challenge requiring fragments from across the world. Start your journey in Hueco Mundo.'
    )
    .addSimpleSection(
        '👤 Starting the Quest',
        'The NPC to start the Hogyoku quest is located at **Hueco Mundo**, near the Aizen sword NPC (not the mastery one).',
        hogquestNpc
    )
    .addSimpleSection(
        '💎 Fragment Locations',
        '**Collect all 6 Fragments:**\n• **1st Fragment:** Snow Island\n• **2nd Fragment:** Shibuya\n• **3rd Fragment:** Hueco Mundo\n• **4th Fragment:** Shinjuku\n• **5th Fragment:** Slime\n• **6th Fragment:** Judgement (right side of island)'
    )
    .addSection({
        heading: '🎥 Video Guide: Piece 1',
        text: 'Visual guide for the first Hogyoku fragment.',
        image: hogquestPiece1,
        mediaType: 'video'
    })
    .addSection({
        heading: '🎥 Video Guide: Piece 2',
        text: 'Visual guide for the second Hogyoku fragment.',
        image: hogquestPiece2,
        mediaType: 'video'
    })
    .addSection({
        heading: '🎥 Video Guide: Piece 3',
        text: 'Visual guide for the third Hogyoku fragment.',
        image: hogquestPiece3,
        mediaType: 'video'
    })
    .addSection({
        heading: '🎥 Video Guide: Piece 4',
        text: 'Visual guide for the fourth Hogyoku fragment.',
        image: hogquestPiece4,
        mediaType: 'video'
    })
    .addSection({
        heading: '🎥 Video Guide: Piece 5',
        text: 'Visual guide for the fifth Hogyoku fragment.',
        image: hogquestPiece5,
        mediaType: 'video'
    })
    .addSection({
        heading: '🎥 Video Guide: Piece 6',
        text: 'Visual guide for the sixth Hogyoku fragment.',
        image: hogquestPiece6,
        mediaType: 'video'
    }),

    'Ancient Puzzle': new WikiArticle(
        `Located on **Dungeon Island**, which is next to Boss Island and Shibuya City. This puzzle yields powerful rewards for those who can complete the trials.`
    )
    .addSimpleSection(
        '🏛️ Entering the Temple',
        `**Quest Giver:** The quest can be found once you go into the room. Talk to the NPC and he will give you the quest.`
    )
    .addSimpleSection(
        '📜 Quest Trials',
        `To complete the ancient puzzle, you must fulfill two primary objectives:\n\n• **Quest 1:** Look for 6x Ancient Artifacts\n• **Quest 2:** Kill 25x Bosses`
    )
    .addSimpleSection('Ancient Piece 1 - Starter Island', '**Location:** Found on Starter Island.', ancientPiece1)
    .addSimpleSection('Ancient Piece 2 - Jungle Island', '**Location:** Found on Jungle Island.', ancientPiece2)
    .addSimpleSection('Ancient Piece 3 - Desert Island', '**Location:** Found on Desert Island.', ancientPiece3)
    .addSimpleSection('Ancient Piece 4 - Snow Island', '**Location:** Found on Snow Island.', ancientPiece4)
    .addSection({
        heading: 'Ancient Piece 5 - Shibuya Island',
        text: '**Location:** Found on Shibuya Island.',
        image: ancientPiece5,
        mediaType: 'video'
    })
    .addSimpleSection('Ancient Piece 6 - Hueco Mundo', '**Location:** Found on Hueco Mundo.', ancientPiece6)
    .addSimpleSection(
        '⚔️ Final Trial',
        'After collecting all 6 artifacts, you must **Kill 25 Bosses** to complete the quest and claim your rewards.'
    ),
};
