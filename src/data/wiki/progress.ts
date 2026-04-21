import { WikiArticle } from '../../types/wiki';
import getIchigoImg from '../../assets/Sea 1/progress/getichigo.png';
import getRaceImg from '../../assets/Sea 1/progress/getrace.png';
import getObsImg from '../../assets/Sea 1/progress/getobs.png';
import getArmImg from '../../assets/Sea 1/progress/getarm.png';
import getGilgaImg from '../../assets/Sea 1/progress/getgilga.png';
import getGilgaTitleImg from '../../assets/Sea 1/progress/getgilgatitle.png';
import gilgaRequireImg from '../../assets/Sea 1/progress/gilgarequire.png';
import aizenv1npcImg from '../../assets/Sea 1/progress/aizenv1npc.png';
import anosnpcImg from '../../assets/Sea 1/progress/anosnpc.png';
import demonitequestImg from '../../assets/Sea 1/progress/demonitequest.png';
import demonfrag1Img from '../../assets/Sea 1/progress/demonfrag1.png';
import demonfrag2Img from '../../assets/Sea 1/progress/demonfrag2.png';
import aizenv2buyImg from '../../assets/Sea 1/progress/aizenv2buy.png';
import aizenv2summonImg from '../../assets/Sea 1/progress/aizenv2summon.png';
import aizenv2FskillImg from '../../assets/Sea 1/progress/aizenv2Fskill.png';

export const progressArticle = new WikiArticle(
    'Complete progression guide through Sailor Piece - from beginner to endgame specs. Follow this path to maximize your efficiency and power.'
)
.addSimpleSection(
    '🗡️ Getting Started',
    "So this is the way I progress in the game, hope you guys like it!\n\n**Step 1: Get Ichigo Sword**\nHead to Boss Island and use boss tickets to obtain the Ichigo sword. Don't worry, I'll give you tickets so you can buy the sword.",
    getIchigoImg
)
.addSimpleSection(
    '⚙️ Secret Traits & Setup',
    '**Step 2: Secret Traits**\nGet secret traits on Sailor Island, get META race and clan then store it if you still want to gamble.\n\n**Step 3: Haki Unlock**\nGet Observation Haki and Armament Haki.\n\n**Step 4: Auto-Grind Setup**\nTurn on auto skill and quest repeat in the game settings. Do this until you reach max level (you can bypass the quests on any island as long as you can kill the mobs). Happy grinding!',
    getRaceImg
)
.addSimpleSection(
    '🗡️ Haki Locations',
    '**Observation Haki:**\nFound on Desert Island. Requires 300 Gems and 250,000 Coins.\n\n**Armament Haki:**\nFound on Snow Island. Requires 250 Gems, 250,000 Coins, and completion of specific questlines.',
    getObsImg
)
.addSimpleSection(
    '⚔️ Armament Haki Details',
    "Armament Haki is essential for high-level combat. You'll need it for Conqueror's Haki progression and dealing with tougher enemies.\n\n**Questline Requirements:**\n• NPC Massacre: Defeat 250 NPCs\n• Skill Mastery: Use your Z skill 100 times\n• Physical Training: Punch 1K times",
    getArmImg
)
.addSimpleSection(
    '⚔️ Max Level & Gilgamesh Prep',
    "Once you reach max level and you've gathered enough broken swords, you can start progressing to get Gilga so you can obtain his spec on boss island.",
    getGilgaImg
)
.addSimpleSection(
    '👑 GILGAMESH PROGRESS',
    '**Step 1: Get His Title**\nGet the title "Golden King," which has a 1% drop rate from Gilgamesh. Don\'t worry, it has a pity system - just click the locked text to see your pity on title.',
    getGilgaTitleImg
)
.addSimpleSection(
    '🌟 Gilgamesh Spec & F Move',
    "After you obtain the Gilgamesh spec, you should get his F move next, which is the mastery they're referring to.\n\n**Requirements:**\n• First, get the Servant race from the race reroll\n• Then grind the requirements\n• After you get all the requirements, craft the Babylon Key and consume it from your inventory",
    gilgaRequireImg
)
.addSimpleSection(
    '🌀 AIZEN V1 PROGRESS',
    'You need to get Aizen V1 to unlock Aizen V2. You can find the Aizen NPC over in Hueco Mundo.\n\n**Questlines:**\n• Kill 250 hollows\n• Obtain Shinigami Race (Legendary)\n• Use worthiness fragment\n• Deal 350M damage\n• Kill Aizen boss 15 times',
    aizenv1npcImg
)
.addSection({
    heading: '💡 PRO TIP: Aizen Quest Bypass',
    text: '**About killing Aizen 15 times:**\nYou can bypass that instead of waiting every 5 minutes. Ask for help from people who can spawn Aizen in Soul Society.',
    imageSize: 'small'
})
.addSimpleSection(
    '🎯 OPTIMIZE YOUR BUILDS',
    'Make sure to optimize your builds for both damage and farming efficiency. Check out the **Builds** tab for detailed setups on Luck Build and Damage Build configurations.'
)
.addSimpleSection(
    '😈 ANOS SPEC PROGRESS',
    '**Why Anos?**\nAnos is also good for grinding since he has many AoE skills and a fast cooldown.\n\n**Getting Started:**\nGo to Academy Island and do his quest first.',
    anosnpcImg
)
.addSimpleSection(
    '💀 DEMONITE CORE LOCATIONS',
    '**Requirements for Demonite Core:**\n• Demon king title\n• Voldigoat clan\n• 65x Calamity Seals\n• 12x Demonic Fragments\n• 6x Demonic Shards\n• 2x Destruction Eye\n• 1x Imperal Mark',
    demonitequestImg
)
.addSimpleSection(
    '🔍 Demon Fragment Locations',
    'Demonic Fragments and Shards can be obtained from specific boss drops and dungeon completions. Focus on farming demons and shadow-type enemies for the best drop rates.',
    demonfrag1Img
)
.addSimpleSection(
    '⚗️ Crafting Materials',
    'Additional crafting components needed for the Demonite Core synthesis. Make sure to gather all materials before attempting the craft.',
    demonfrag2Img
)
.addSimpleSection(
    '✨ AFTER YOU GET ANOS',
    'After you get Anos, you can now progress to Aizen V2.'
)
.addSimpleSection(
    '🌌 AIZEN V2 PROGRESS',
    "So what you need here is patience. You’ll need to spend sigils for Aizen which you can only get from Quincy mobs in Soul Society. \n\n**Farming Method:**\nFocus on grouping Quincy mobs for efficient sigil drops. This is the most time-consuming part of the V2 progression.",
    aizenv2summonImg
)
.addSimpleSection(
    '📜 Aizen V2 Requirements',
    "Gather the following items and achievements to unlock the True Aizen power:\n\n• **Title:** Transcendent Being\n• **Sword:** Aizen Sword V1\n• **Items:** 1x Evolution Frag, 3x Transcendent Core, 8x Divinity Essence, 15x Fusion Ring, 75x Chrysalis Sigil\n• **Gems:** 35,000",
    aizenv2buyImg
)
.addSimpleSection(
    '⚔️ Aizen F Mastery Questlines',
    "Once you have the V2 spec, complete these final trials to unlock its full potential:\n\n• **Boss Trial:** Defeat the True Aizen boss on Hard or Extreme 15 times.\n• **Clan Mastery:** Obtain the **Espada Clan** through rerolls.\n• **Ascension:** Consume **5 Transmutation Shards**.",
    aizenv2FskillImg
);
