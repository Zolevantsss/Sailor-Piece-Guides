import type { ArticleData } from '../../types/wiki';
import getIchigoImg from '../../assets/progress/getichigo.png';
import getRaceImg from '../../assets/progress/getrace.png';
import getObsImg from '../../assets/progress/getobs.png';
import getArmImg from '../../assets/progress/getarm.png';
import getGilgaImg from '../../assets/progress/getgilga.png';
import getGilgaTitleImg from '../../assets/progress/getgilgatitle.png';
import gilgaRequireImg from '../../assets/progress/gilgarequire.png';
import aizenv1npcImg from '../../assets/progress/aizenv1npc.png';
import anosnpcImg from '../../assets/progress/anosnpc.png';
import demonitequestImg from '../../assets/progress/demonitequest.png';
import demonfrag1Img from '../../assets/progress/demonfrag1.png';
import demonfrag2Img from '../../assets/progress/demonfrag2.png';

export const progressArticle: ArticleData = {
    content: 'Complete progression guide through Sailor Piece - from beginner to endgame specs. Follow this path to maximize your efficiency and power.',
    sections: [
        {
            heading: '🗡️ Getting Started',
            text: 'So this is the way I progress in the game, hope you guys like it!\n\n**Step 1: Get Ichigo Sword**\nHead to Boss Island and use boss tickets to obtain the Ichigo sword. Don\'t worry, I\'ll give you tickets so you can buy the sword.',
            image: getIchigoImg
        },
        {
            heading: '⚙️ Secret Traits & Setup',
            text: '**Step 2: Secret Traits**\nGet secret traits on Sailor Island, get META race and clan then store it if you still want to gamble.\n\n**Step 3: Haki Unlock**\nGet Observation Haki and Armament Haki.\n\n**Step 4: Auto-Grind Setup**\nTurn on auto skill and quest repeat in the game settings. Do this until you reach max level (you can bypass the quests on any island as long as you can kill the mobs). Happy grinding!',
            image: getRaceImg
        },
        {
            heading: '🗡️ Haki Locations',
            text: '**Observation Haki:**\nFound on Desert Island. Requires 300 Gems and 250,000 Coins.\n\n**Armament Haki:**\nFound on Snow Island. Requires 250 Gems, 250,000 Coins, and completion of specific questlines.',
            image: getObsImg
        },
        {
            heading: '⚔️ Armament Haki Details',
            text: 'Armament Haki is essential for high-level combat. You\'ll need it for Conqueror\'s Haki progression and dealing with tougher enemies.\n\n**Questline Requirements:**\n• NPC Massacre: Defeat 250 NPCs\n• Skill Mastery: Use your Z skill 100 times\n• Physical Training: Punch 1K times',
            image: getArmImg
        },
        {
            heading: '⚔️ Max Level & Gilgamesh Prep',
            text: 'Once you reach max level and you\'ve gathered enough broken swords, you can start progressing to get Gilga so you can obtain his spec on boss island.',
            image: getGilgaImg
        },
        {
            heading: '👑 GILGAMESH PROGRESS',
            text: '**Step 1: Get His Title**\nGet the title "Golden King," which has a 1% drop rate from Gilgamesh. Don\'t worry, it has a pity system - just click the locked text to see your pity on title.',
            image: getGilgaTitleImg
        },
        {
            heading: '🌟 Gilgamesh Spec & F Move',
            text: `After you obtain the Gilgamesh spec, you should get his F move next, which is the mastery they're referring to.\n\n**Requirements:**\n• First, get the Servant race from the race reroll\n• Then grind the requirements\n• After you get all the requirements, craft the Babylon Key and consume it from your inventory`,
            image: gilgaRequireImg
        },
        {
            heading: '🌀 AIZEN V1 PROGRESS',
            text: 'You need to get Aizen V1 to unlock Aizen V2. You can find the Aizen NPC over in Hueco Mundo.\n\n**Questlines:**\n• Kill 250 hollows\n• Obtain Shinigami Race (Legendary)\n• Use worthiness fragment\n• Deal 350M damage\n• Kill Aizen boss 15 times',
            image: aizenv1npcImg
        },
        {
            heading: '💡 PRO TIP: Aizen Quest Bypass',
            text: '**About killing Aizen 15 times:**\nYou can bypass that instead of waiting every 5 minutes. Ask for help from people who can spawn Aizen in Soul Society.',
            imageSize: 'small'
        },
        {
            heading: '🎯 OPTIMIZE YOUR BUILDS',
            text: 'Make sure to optimize your builds for both damage and farming efficiency. Check out the **Builds** tab for detailed setups on Luck Build and Damage Build configurations.'
        },
        {
            heading: '😈 ANOS SPEC PROGRESS',
            text: '**Why Anos?**\nAnos is also good for grinding since he has many AoE skills and a fast cooldown.\n\n**Getting Started:**\nGo to Academy Island and do his quest first.',
            image: anosnpcImg
        },
        {
            heading: '💀 DEMONITE CORE LOCATIONS',
            text: '**Requirements for Demonite Core:**\n• Demon king title\n• Voldigoat clan\n• 65x Calamity Seals\n• 12x Demonic Fragments\n• 6x Demonic Shards\n• 2x Destruction Eye\n• 1x Imperal Mark',
            image: demonitequestImg
        },
        {
            heading: '🔍 Demon Fragment Locations',
            text: 'Demonic Fragments and Shards can be obtained from specific boss drops and dungeon completions. Focus on farming demons and shadow-type enemies for the best drop rates.',
            image: demonfrag1Img
        },
        {
            heading: '⚗️ Crafting Materials',
            text: 'Additional crafting components needed for the Demonite Core synthesis. Make sure to gather all materials before attempting the craft.',
            image: demonfrag2Img
        },
        {
            heading: '✨ AFTER YOU GET ANOS',
            text: 'After you get Anos, you can now progress to Aizen V2.'
        }
    ]
};
