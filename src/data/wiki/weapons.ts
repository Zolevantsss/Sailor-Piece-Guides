import { WikiArticle } from '../../types/wiki';
import type { ArticlesRecord } from '../../types/wiki';
import atomicBoss from '../../assets/atomicweapon/atomicboss.png';
import atomicNpc from '../../assets/atomicweapon/atomicnpc.png';
import abyssalEmpressImg from '../../assets/abyssalempress/abyssalempress.png';
import abyssalEmpressUI from '../../assets/abyssalempress/abyssalempressUI.png';
import esdeathNpc from '../../assets/esdeathweapon/esdeathnpc.png';
import esdeathMastery from '../../assets/esdeathweapon/esdeathmastery.png';
import kokuNpc from '../../assets/kokushiboweapon/kokunpc.png';
import kokuMastery from '../../assets/kokushiboweapon/kokumastery.png';
import madaraNpc from '../../assets/madaraweapon/madaranpc.png';
import madaraMastery from '../../assets/madaraweapon/madaramastery.png';
import madaraSpawn from '../../assets/madaraweapon/madaraspawn.png';

export const weaponArticles: ArticlesRecord = {
    'Atomic Sword': new WikiArticle(
        'The Atomic (Cid V2) Sword is a high-DPS weapon and a significant character upgrade. To begin your journey, head to **Lawless Island** via a teleportation portal.'
    )
        .addSimpleSection(
            '🗡️ How to Get Atomic Sword',
            'Find the NPC holding a sword over their shoulder in the **right corner of Lawless Island**. You must farm **Abyss Sigils** to spawn the Atomic Boss and gather his materials.'
        )
        .addSimpleSection(
            '📜 Unlock Requirements',
            'To unlock the Atomic Sword, you must possess:\n\n• **Title:** ‘Eminence Incarnate’\n• **Sword:** Own the **Shadow Sword**\n• **Gems:** 45,000\n• **Atomic Omen:** 1x\n• **Eminence Essence:** 3x\n• **Shadow Remnant:** 9x\n• **Magic Shard:** 16x\n• **Abyss Sigil:** 80x',
            atomicNpc
        )
        .addSimpleSection(
            '👹 Atomic Boss Drop Rates',
            'Defeat the **Atomic (Cid) Boss** on Lawless Island to obtain these essential materials:\n\n• **Magic Shard:** 11.50%\n• **Shadow Remnant:** 4.01%\n• **Atomic Outfit:** 1.23%\n• **Eminence Essence:** 1.02%\n• **Atomic Omen:** 0.54%\n• **Title:** Eminence Incarnate',
            atomicBoss
        )
        .addSimpleSection(
            '⚔️ Shadow Sword (Prerequisite)',
            'Before getting the Atomic Sword, you must obtain its V1 version—the **Shadow (Cid V1) Sword** from **Dungeon Island** (NPC on top-left of the building).\n\n**Requirements:**\n• **Race:** Shadowborn\n• **Money:** 10M\n• **Gems:** 15K\n• **Atomic Core:** 1x\n• **Shadow Essence:** 4x\n• **Void Seed:** 8x\n• **Umbral Capsule:** 20x'
        )
        .addSimpleSection(
            '🌀 Unlocking F Move (Mastery)',
            'Talk to the **Atomic Master NPC** in the left end corner of Lawless Island after unlocking the sword to start these mastery quests:\n\n1. **Boss Slayer:** Kill the Atomic (Cid) Boss 20 times on Hard or Extreme Difficulty.\n2. **Clan Mastery:** Get the **Eminence Clan** through rerolls.\n3. **Tower Legend:** Reach **Floor 51** on the Infinite Tower 5 times.'
        ),

    'Abyssal Empress (Acheron)': new WikiArticle(
        'The Abyssal Empress (Acheron) is a powerful spec weapon obtained through the challenge of the **Tower of Infinity** on **Tower Island**.'
    )
        .addSimpleSection(
            '🛒 How to Get',
            'Acheron can be purchased directly from the **Tower Shop NPC** for **4,000 Tokens**. Your main goal is to farm the required currency by scaling the tower floors.',
            abyssalEmpressUI
        )
        .addSimpleSection(
            '💠 Token Farming',
            'The Tower Island also contains the Tower Mode entrance and the Tower Upgrade NPC. Scaling the tower is the most efficient way to gather the tokens needed for Acheron.',
            abyssalEmpressImg
        ),

    'Esdeath (General of Ice)': new WikiArticle(
        'The Esdeath spec is a powerful ice-based combat style that offers immense crowd control and damage capabilities. It can be found in **Boss Island**'
    )
        .addSimpleSection(
            '📜 Unlock Requirements',
            'Gather the following materials to unlock the Esdeath spec:\n\n• **Items:** 1x Ice Core, 4x Frozen Band, 9x Glacier Remnant, 17x Battle Shards, 25x Frost Relics\n• **Gems:** 40,000',
            esdeathNpc
        )
        .addSimpleSection(
            '❄️ F Move Mastery',
            'To unlock the final mastery for Esdeath, you must meet these additional requirements:\n\n• **Clan Mastery:** Obtain the **Frostbane Clan** through rerolls.\n• **Material Grind:** Collect **Frostbane Clan**, **2 Ice Core**, **10 Frozen Brand**, **85 Frost Relics**.',
            esdeathMastery
        ),

    'Kokushibo (Upper Moon One)': new WikiArticle(
        'The Kokushibo spec is based on Moon Breathing, offering rapid and lethal strikes with wide area-of-effect coverage. It can be found in **Boss Island**'
    )
        .addSimpleSection(
            '📜 Unlock Requirements',
            'Meet these elite requirements to unlock the Kokushibo spec:\n\n• **Title:** Six Eyed Demon\n• **Items:** 1x Moon Crest, 4x Crescent Shard, 9x Lunar Essence, 16x Demon Remnant, 25x Upper Seal\n• **Gems:** 37,500',
            kokuNpc
        )
        .addSimpleSection(
            '🌙 F Move Mastery',
            'To unlock the final mastery for Kokushibo, you must meet these additional requirements:\n\n• **Clan Mastery:** Obtain the **Upper Clan** through rerolls.\n• **Material Grind:** Collect **10x Moon Crests**.',
            kokuMastery
        ),

    'Madara (The Ghost of Uchiha)': new WikiArticle(
        'Madara is a world boss spec that offers devastating area attacks and peerless combat presence. He can be obtained from **Ninja Island** as a world boss summon.'
    )
        .addSimpleSection(
            '📜 Unlock Requirements',
            'To wield the power of the Uchiha ancestor, you must meet these requirements:\n\n• **Title:** Battlefield Warlord\n• **Items:** 1x Path Fragment, 3x Eternal Core, 8x Battle Sigil, 15x Power Remnant\n• **Gems:** 40,000',
            madaraNpc
        )
        .addSimpleSection(
            '🔥 F Move Mastery',
            'Unlock the ultimate potential of the Madara spec through these trials:\n\n• **Race Mastery:** Obtain the **Warlord Race** through rerolls.\n• **Material Cost:** 2x Path Fragment, 5x Eternal Core, 10x Battle Sigil',
            madaraMastery
        )
        .addSimpleSection(
            '🏹 World Boss Spawn',
            'Madara will spawn every **6 minutes** on **Ninja Island**.',
            madaraSpawn
        ),
};
