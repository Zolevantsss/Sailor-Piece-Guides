import type { ArticlesRecord } from '../../types/wiki';
import slimePiece1 from '../../assets/slimepuzzle/piece1.png';
import slimePiece2 from '../../assets/slimepuzzle/piece2.png';
import slimePiece3 from '../../assets/slimepuzzle/piece3.png';
import slimePiece4 from '../../assets/slimepuzzle/piece4.png';
import slimePiece5 from '../../assets/slimepuzzle/piece5.png';
import slimePiece6 from '../../assets/slimepuzzle/piece6.png';
import slimePiece7 from '../../assets/slimepuzzle/piece7.png';
import ancientPiece1 from '../../assets/ancientpuzzle/piece1.png';
import ancientPiece2 from '../../assets/ancientpuzzle/piece2.png';
import ancientPiece3 from '../../assets/ancientpuzzle/piece3.png';
import ancientPiece4 from '../../assets/ancientpuzzle/piece4.png';
import ancientPiece5 from '../../assets/ancientpuzzle/piece5.mov';
import ancientPiece6 from '../../assets/ancientpuzzle/piece6.png';
import demonitePiece1 from '../../assets/demonitepuzzle/piece1.png';
import demonitePiece2 from '../../assets/demonitepuzzle/piece2.png';
import hogquestNpc from '../../assets/hogquest/hogquestnpc.png';
import hogquestPiece1 from '../../assets/hogquest/piece1.mov';
import hogquestPiece2 from '../../assets/hogquest/piece2.mov';
import hogquestPiece3 from '../../assets/hogquest/piece3.mov';
import hogquestPiece4 from '../../assets/hogquest/piece4.mov';
import hogquestPiece5 from '../../assets/hogquest/piece5.mov';
import hogquestPiece6 from '../../assets/hogquest/piece6.mov';

export const puzzleArticles: ArticlesRecord = {
    'Slime Puzzle': {
        content: 'Find 7 Slime Pieces around the map! The quest NPC is located at Slime Island. Collect all pieces to complete the slime puzzle quest.',
        sections: [
            {
                heading: '📍 Slime Piece Locations',
                text: 'Locate all 7 pieces to unlock the secrets of the Slime Island.',
            },
            {
                heading: 'Slime Piece 1 - Desert Island',
                text: '**Location:** Under a dinosaur',
                image: slimePiece1
            },
            {
                heading: 'Slime Piece 2 - Snow Island',
                text: '**Location:** Behind a tree',
                image: slimePiece2
            },
            {
                heading: 'Slime Piece 3 - Starter Island',
                text: '**Location:** On a tree',
                image: slimePiece3
            },
            {
                heading: 'Slime Piece 4 - Jungle Island',
                text: '**Location:** On top of a hut/outpost',
                image: slimePiece4
            },
            {
                heading: 'Slime Piece 5 - Shibuya',
                text: '**Location:** Near Gojo',
                image: slimePiece5
            },
            {
                heading: 'Slime Piece 6 - Hueco Mundo',
                text: '**Location:** In between a building',
                image: slimePiece6
            },
            {
                heading: 'Slime Piece 7 - Shinjuku',
                text: '**Location:** Near Sukuna V2 Spawn Arena',
                image: slimePiece7
            },
        ]
    },
    'Demonite Puzzle': {
        content: 'Find 2 Demonite pieces around the world! These rare puzzle pieces are part of the Demonite Core crafting requirements.',
        sections: [
            {
                heading: '🧩 Piece Locations',
                text: 'These pieces are essential for progressing through the Anos spec questline.',
            },
            {
                heading: 'Demonite Piece 1',
                text: 'First demonite puzzle piece. Required for Demonite Core crafting.',
                image: demonitePiece1
            },
            {
                heading: 'Demonite Piece 2',
                text: 'Second demonite puzzle piece. Required for Demonite Core crafting.',
                image: demonitePiece2
            },
        ]
    },
    'Hogyoku Quest Puzzle': {
        content: 'The Hogyoku Quest is a multi-stage challenge requiring fragments from across the world. Start your journey in Hueco Mundo.',
        sections: [
            {
                heading: '👤 Starting the Quest',
                text: 'The NPC to start the Hogyoku quest is located at **Hueco Mundo**, near the Aizen sword NPC (not the mastery one).',
                image: hogquestNpc
            },
            {
                heading: '💎 Fragment Locations',
                text: '**Collect all 6 Fragments:**\n• **1st Fragment:** Snow Island\n• **2nd Fragment:** Shibuya\n• **3rd Fragment:** Hueco Mundo\n• **4th Fragment:** Shinjuku\n• **5th Fragment:** Slime\n• **6th Fragment:** Judgement (right side of island)',
            },
            {
                heading: '🎥 Video Guide: Piece 1',
                text: 'Visual guide for the first Hogyoku fragment.',
                image: hogquestPiece1,
                mediaType: 'video'
            },
            {
                heading: '🎥 Video Guide: Piece 2',
                text: 'Visual guide for the second Hogyoku fragment.',
                image: hogquestPiece2,
                mediaType: 'video'
            },
            {
                heading: '🎥 Video Guide: Piece 3',
                text: 'Visual guide for the third Hogyoku fragment.',
                image: hogquestPiece3,
                mediaType: 'video'
            },
            {
                heading: '🎥 Video Guide: Piece 4',
                text: 'Visual guide for the fourth Hogyoku fragment.',
                image: hogquestPiece4,
                mediaType: 'video'
            },
            {
                heading: '🎥 Video Guide: Piece 5',
                text: 'Visual guide for the fifth Hogyoku fragment.',
                image: hogquestPiece5,
                mediaType: 'video'
            },
            {
                heading: '🎥 Video Guide: Piece 6',
                text: 'Visual guide for the sixth Hogyoku fragment.',
                image: hogquestPiece6,
                mediaType: 'video'
            }
        ]
    },
    'Ancient Puzzle': {
        content: `Located on **Dungeon Island**, which is next to Boss Island and Shibuya City. This puzzle yields powerful rewards for those who can complete the trials.`,
        sections: [
            {
                heading: '🏛️ Entering the Temple',
                text: `**Quest Giver:** The quest can be found once you go into the room. Talk to the NPC and he will give you the quest.`,
            },
            {
                heading: '📜 Quest Trials',
                text: `To complete the ancient puzzle, you must fulfill two primary objectives:\n\n• **Quest 1:** Look for 6x Ancient Artifacts\n• **Quest 2:** Kill 25x Bosses`,
            },
            {
                heading: 'Ancient Piece 1 - Starter Island',
                text: '**Location:** Found on Starter Island.',
                image: ancientPiece1
            },
            {
                heading: 'Ancient Piece 2 - Jungle Island',
                text: '**Location:** Found on Jungle Island.',
                image: ancientPiece2
            },
            {
                heading: 'Ancient Piece 3 - Desert Island',
                text: '**Location:** Found on Desert Island.',
                image: ancientPiece3
            },
            {
                heading: 'Ancient Piece 4 - Snow Island',
                text: '**Location:** Found on Snow Island.',
                image: ancientPiece4
            },
            {
                heading: 'Ancient Piece 5 - Shibuya Island',
                text: '**Location:** Found on Shibuya Island.',
                image: ancientPiece5,
                mediaType: 'video'
            },
            {
                heading: 'Ancient Piece 6 - Hueco Mundo',
                text: '**Location:** Found on Hueco Mundo.',
                image: ancientPiece6
            },
            {
                heading: '⚔️ Final Trial',
                text: 'After collecting all 6 artifacts, you must **Kill 25 Bosses** to complete the quest and claim your rewards.',
            }
        ]
    },
};
