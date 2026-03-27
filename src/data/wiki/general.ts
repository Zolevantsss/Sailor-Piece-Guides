import type { ArticlesRecord } from '../../types/wiki';
import traitsImg from '../../assets/traits/traits.png';
import clanImg from '../../assets/traits/clan.png';
import raceImg from '../../assets/traits/race.png';
import storeImg from '../../assets/traits/store.png';
import runeloc from '../../assets/Runes/runeloc.png';
import runeslist from '../../assets/Runes/runeslist.png';
import secretrune1 from '../../assets/Runes/secretrune1.png';
import secretrune2 from '../../assets/Runes/secretrune2.png';
import skillTreeImg from '../../assets/skilltree/skilltree.png';
import skillTreeLocImg from '../../assets/skilltree/skilltreeloc.png';
import specPassiveImg from '../../assets/spec/specpassive.png';
import titleImg from '../../assets/title/title.png';
import towerImg from '../../assets/infinitetower/infinitetower.png';
import towerUI from '../../assets/infinitetower/towerUI.png';
import towerKey from '../../assets/infinitetower/towerkey.png';

export const generalArticles: ArticlesRecord = {
    'Rerolls': {
        content: 'Master your character\'s destiny by rerolling your Race, Clan, and Traits. These systems allow you to fine-tune your build for ultimate power.',
        sections: [
            {
                heading: '👤 Trait Master NPC',
                text: 'You can find the **Traits NPC** on Sailor Island, located on the left side immediately upon entering the island interior. Speak to him to reroll your combat traits.',
                image: traitsImg
            },
            {
                heading: '👪 Clan Rerolls',
                text: 'You can use **Clan Rerolls** directly from your inventory. Simply select the item and confirm to roll for a new lineage.',
                image: clanImg
            },
            {
                heading: '🧬 Race Rerolls',
                text: 'Similar to clans, **Race Rerolls** are consumed from your inventory. Each roll gives you a chance at a more powerful or specialized race.',
                image: raceImg
            },
            {
                heading: '📦 Item Storage',
                text: 'You can also store fruits, races, traits, and clans in the **Storage** system if you get something valuable that you want to save for later.',
                image: storeImg
            },
            {
                heading: '💎 How to Obtain',
                text: 'Rerolls and storage items can be obtained through various gameplay methods:\n• Killing regular mobs\n• Defeating powerful bosses\n• Redeeming active game codes',
            },
        ]
    },
    'Runes': {
        content: 'Enhance your character\'s abilities with powerful Runes. These mystical artifacts provide critical stat boosts and are essential for endgame progression.',
        sections: [
            {
                heading: '📍 Obtaining Runes',
                text: 'You can obtain runes by completing the **Rune Dungeon** on **Dungeon Island**. These missions test your strength and reward you with various rune types.',
                image: runeloc
            },
            {
                heading: '📜 Base Runes List',
                text: 'Here are the base runes you can collect from the dungeon. These are the non-maxed versions that form the foundation of your build.',
                image: runeslist
            },
            {
                heading: '✨ Secret Runes (New)',
                text: 'The rarest and most powerful runes are only obtained from the **Tower of Infinity** gamemode. These secret runes are not found in the regular rune dungeon.',
            },
            {
                heading: '⚔️ Primordial Rune (Secret 1)',
                text: '**Max Level Stats:** +120% DMG [x2.2 Multiplier Dmg]\n\n**Best Use:** High DPS builds for boss-melting and combat efficiency.',
                image: secretrune1
            },
            {
                heading: '🍀 Radiant Rune (Secret 2)',
                text: '**Max Level Stats:** +26% LUCK\n\n**Best Use:** Farming and grinding rare items, mythical fragments, and crafting materials.',
                image: secretrune2
            },
            {
                heading: '💡 Pro Player Tip',
                text: 'Secret runes have a very low drop rate from the Tower of Infinity. Good luck obtaining these elite artifacts!'
            }
        ]
    },
    'Skill Tree': {
        content: 'Take your combat capabilities to the next level by investing in the Skill Tree. This system allows for deep character specialization across multiple offensive and defensive stats.',
        sections: [
            {
                heading: '📜 Unlock Requirements',
                text: 'The Skill Tree isn\'t available to everyone. To gain access, you must visit the **Skill Tree NPC** on **Slime Island**. He requires a steep entry fee:\n• 7,000 Player Levels\n• 1,000 Gems',
                image: skillTreeLocImg
            },
            {
                heading: '⚔️ Earning Skill Points (SP)',
                text: 'Skill points are earned through combat mastery. For every **250 NPCs** killed, you will automatically earn **1 SP** to spend in your tree. There is no shortcut to power—only the grind.',
            },
            {
                heading: '🌳 Mastery Branches',
                text: 'Once unlocked, you can distribute your SP across five critical branches:\n• **Luck**: Increases rare drop chances\n• **Crit Chance**: Probability of landing critical hits\n• **Crit Damage**: The multiplier for your critical strikes\n• **HP %**: Total health pool reinforcement\n• **Damage %**: Flat increase to all outgoing damage',
                image: skillTreeImg
            },
        ]
    },
    'Spec Passive': {
        content: 'Judgment Island is the definitive location where players unlock and roll Spec Passives. These specialized traits add powerful unique buffs to your character build.',
        sections: [
            {
                heading: '📜 Unlock Requirements',
                text: 'To gain access to the Spec Passive system, you must meet some of the game\'s highest requirements:\n• **Reach Level 10,000**\n• **5,000 Gems**',
                image: specPassiveImg
            },
            {
                heading: '💠 Passive Shards',
                text: 'Once you have unlocked the system, you can obtain **Passive Shards** as drops from various NPCs and bosses across the islands. These shards are essential for the rerolling and enhancement of your spec passives.'
            },
            {
                heading: '💡 Pro Strategy Tips',
                text: 'Maximize your efficiency by choosing the right passives for your current goals:\n\n• **Grinding Setup:** Target the **Fortune Chosen** passive for any spec or sword you use for farming, such as **Anos** or **Gilgamesh**.\n• **Combat Setup:** Seek out the **Executioner** passive for your damage builds to melt bosses and outperform in PvP.'
            }
        ]
    },
    'Titles': {
        content: 'Titles are both cosmetic and buff-boosting. When equipping a title, you can show off an achievement while also gaining buffs.',
        sections: [
            {
                heading: '📜 Title System',
                text: 'Titles in Sailor Piece provide more than just visual flair. Each title comes with unique buffs that can significantly enhance your character\'s performance in combat or farming. From damage multipliers to luck boosts, finding the right title is key to an optimized build.',
                image: titleImg
            },
            {
                heading: '🛡️ Pity System',
                text: 'Worried about RNG? There’s a built-in **Pity System** when it comes to getting titles. This ensures that even if you’re getting unlucky with drops, you will eventually unlock the title you’re after. No grind is ever wasted.'
            }
        ]
    },
    'Tower of Infinity': {
        content: 'The Infinite Tower is one of the best endgame farming modes in Sailor Piece. The farther players scale up in the tower, the better rewards they will receive.',
        sections: [
            {
                heading: '🧗 Scaling the Tower',
                text: 'Having stronger builds with top-tier swords, melee weapons, and devil fruits is the key to reaching the end of this tower. As you ascend, the difficulty spikes, but so do the potential rewards.',
                image: towerImg
            },
            {
                heading: '📜 Entry Requirements',
                text: 'The Infinite Tower is located on **Tower Island**. However, entry is restricted. To enter, you must meet the following criteria:\n\n• **Level:** Higher than 8,500\n• **Accessory:** Possession of a **Tower Key**',
                image: towerUI
            },
            {
                heading: '🔑 How to Get Tower Keys',
                text: 'Tower Keys drop from enemies on **Ninja Island** and **Lawless Island**. \n\n**Strategy Tips:**\n• Use a high **AoE damage-dealing build** to clear Ninjas and Arena Fighters efficiently.\n• The drop rate is reasonable, but keep a stockpile as a single key is consumed per portal spawn.',
                image: towerKey
            },
            {
                heading: '🚀 How to Start',
                text: 'Once you meet the requirements:\n1. Reach **Tower Island** via the teleport portal.\n2. Talk to the **Infinite Tower NPC**.\n3. Click the **Spawn** button in the pop-up box to summon the portal.\n4. Walk through the portal to begin your climb!',
            }
        ]
    },
};
