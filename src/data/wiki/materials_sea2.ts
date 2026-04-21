import { WikiArticle } from '../../types/wiki';

export const materialsSea2Article = new WikiArticle(
    'Sea 2 materials include resources found exclusively in the Second Sea, as well as general drops that can be obtained from any NPC in both seas. These materials are vital for high-level crafting and progression.'
)
    .addSimpleSection(
        '✨ Secret Materials',
        '• **Aura Crate:** All NPC Drops\n• **Guild Key:** 0.05% drop chance from any NPC'
    )
    .addSimpleSection(
        '🟣 Mythical Materials',
        '• **Mythical Chest:** 0.05% drop chance from any enemy\n• **Relic Parts 5 & 6:** from Strong Bandit\n• **Relic Parts 7 & 8:** from Fast Ninja\n• **Galaxy Shard:** 11.26% from Cosmic Garou\n• **Monster Pulse:** 4.46% chance from Cosmic Garou\n• **Cosmic Body:** 5.16% chance from Cosmic Garou\n• **Blossom Outfit:** 3.21% drop chance from Kraken/Sea Beast\n• **Kraken Armor:** 1.60% chance from Kraken/Sea Beast\n• **Dragon Goddess:** 0.5% – 5% Drop chance from Kraken/Sea Beast\n• **World Outfit 3:** > 6% chance from The World\n• **World Core:** 2.99% chance from The World\n• **Vampire Omen:** 1.25% chance from the World'
    )
    .addSimpleSection(
        '🟡 Legendary Materials',
        '• **Ancient Fragment:** from any NPC\n• **Bloodline Stone:** from any NPC\n• **Dominion Brand:** from any NPC\n• **Relic Parts 1 & 2:** from Delinquent\n• **Relic Parts 3 & 4:** from Strong Fighter\n• **Star Mark:** 19.46% chance from Cosmic Garou\n• **Time Remnant:** 13.72% from The World\n• **Calamity Seal:** Drops from any enemy\n• **Clan Reroll:** ~0.22% drop chance from any enemy (varies by NPC level)\n• **Legendary Chest:** 0.25% drop chance from any enemy\n• **Power Shard:** drop from any mobs\n• **Upper Seal:** drop from any mobs'
    )
    .addSimpleSection(
        '🔴 Epic Materials',
        '• **Cosmic Essence:** 37.52% chance from Cosmic Garou\n• **Power Fragment:** 39.92% Chance from The World\n• **Broken Sword:** Drops from any enemy\n• **Epic Chest:** 0.45% drop chance from any enemy\n• **Frost Relic:** Drops from any NPC'
    )
    .addSimpleSection(
        '🔵 Rare Materials',
        '• **Rare Chest:** 0.8% drop chance from any enemy'
    )
    .addSimpleSection(
        '⚪ Common Materials',
        '• **Common Chest:** 1.8% drop chance from any enemy\n• **Wood:** 5–7% drop chance from any enemy'
    );
