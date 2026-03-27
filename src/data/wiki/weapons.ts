import type { ArticlesRecord } from '../../types/wiki';
import atomicBoss from '../../assets/atomicweapon/atomicboss.png';
import atomicNpc from '../../assets/atomicweapon/atomicnpc.png';
import abyssalEmpressImg from '../../assets/abyssalempress/abyssalempress.png';
import abyssalEmpressUI from '../../assets/abyssalempress/abyssalempressUI.png';

export const weaponArticles: ArticlesRecord = {
    'Atomic Sword': {
        content: 'The Atomic (Cid V2) Sword is a high-DPS weapon and a significant character upgrade. To begin your journey, head to **Lawless Island** via a teleportation portal.',
        sections: [
            {
                heading: '🗡️ How to Get Atomic Sword',
                text: 'Find the NPC holding a sword over their shoulder in the **right corner of Lawless Island**. You must farm **Abyss Sigils** to spawn the Atomic Boss and gather his materials.',
            },
            {
                heading: '📜 Unlock Requirements',
                text: 'To unlock the Atomic Sword, you must possess:\n\n• **Title:** ‘Eminence Incarnate’\n• **Sword:** Own the **Shadow Sword**\n• **Gems:** 45,000\n• **Atomic Omen:** 1x\n• **Eminence Essence:** 3x\n• **Shadow Remnant:** 9x\n• **Magic Shard:** 16x\n• **Abyss Sigil:** 80x',
                image: atomicNpc
            },
            {
                heading: '👹 Atomic Boss Drop Rates',
                text: 'Defeat the **Atomic (Cid) Boss** on Lawless Island to obtain these essential materials:\n\n• **Magic Shard:** 11.50%\n• **Shadow Remnant:** 4.01%\n• **Atomic Outfit:** 1.23%\n• **Eminence Essence:** 1.02%\n• **Atomic Omen:** 0.54%\n• **Title:** Eminence Incarnate',
                image: atomicBoss
            },
            {
                heading: '⚔️ Shadow Sword (Prerequisite)',
                text: 'Before getting the Atomic Sword, you must obtain its V1 version—the **Shadow (Cid V1) Sword** from **Dungeon Island** (NPC on top-left of the building).\n\n**Requirements:**\n• **Race:** Shadowborn\n• **Money:** 10M\n• **Gems:** 15K\n• **Atomic Core:** 1x\n• **Shadow Essence:** 4x\n• **Void Seed:** 8x\n• **Umbral Capsule:** 20x',
            },
            {
                heading: '🌀 Unlocking F Move (Mastery)',
                text: 'Talk to the **Atomic Master NPC** in the left end corner of Lawless Island after unlocking the sword to start these mastery quests:\n\n1. **Boss Slayer:** Kill the Atomic (Cid) Boss 20 times on Hard or Extreme Difficulty.\n2. **Clan Mastery:** Get the **Eminence Clan** through rerolls.\n3. **Tower Legend:** Reach **Floor 51** on the Infinite Tower 5 times.',
            }
        ]
    },
    'Abyssal Empress (Acheron)': {
        content: 'The Abyssal Empress (Acheron) is a powerful spec weapon obtained through the challenge of the **Tower of Infinity** on **Tower Island**.',
        sections: [
            {
                heading: '🛒 How to Get',
                text: 'Acheron can be purchased directly from the **Tower Shop NPC** for **4,000 Tokens**. Your main goal is to farm the required currency by scaling the tower floors.',
                image: abyssalEmpressUI
            },
            {
                heading: '💠 Token Farming',
                text: 'The Tower Island also contains the Tower Mode entrance and the Tower Upgrade NPC. Scaling the tower is the most efficient way to gather the tokens needed for Acheron.',
                image: abyssalEmpressImg
            }
        ]
    },
};
