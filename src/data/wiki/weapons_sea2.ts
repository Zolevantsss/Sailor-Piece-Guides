import { WikiArticle } from '../../types/wiki';
import type { ArticlesRecord } from '../../types/wiki';
import cosmicBossImg from '../../assets/cosmic/cosmicboss.png';
import cosmicMasteryImg from '../../assets/cosmic/cosmicmastery.png';
import cosmicNpcImg from '../../assets/cosmic/cosmicnpc.png';
import dragonGoddessImg from '../../assets/dragongoddess/dragongoddess.png';
import theWorldBoss from '../../assets/theworld/theworldboss.png';
import theWorldMastery from '../../assets/theworld/theworldmastery.png';
import theWorldNpc from '../../assets/theworld/theworldweapnpc.png';

export const weaponSea2Articles: ArticlesRecord = {
    'The World': new WikiArticle(
        'The World is a powerful weapon associated with mastery over time. To obtain it, players must satisfy elite requirements and defeat The World boss in Sea 2.'
    )
        .addSimpleSection(
            '🗡️ How to Get The World',
            'Find the dedicated NPC to begin your journey. You will need to collect specific boss drops and meet bloodline/title requirements.'
        )
        .addSimpleSection(
            '📜 Unlock Requirements',
            'To unlock The World, you must possess the following:\n\n' +
            '• **Bloodline:** Primordial Bloodline\n' +
            '• **Title:** ‘Time Tyrant’ Sailor Piece Title\n' +
            '• **Dominion Brand:** 80x (Dropped by Strong Bandits)\n' +
            '• **Power Fragment:** 20x\n' +
            '• **Time Remnant:** 12x\n' +
            '• **World Core:** 6x\n' +
            '• **Vampire Omen:** 2x',
            theWorldNpc
        )
        .addSimpleSection(
            '👹 The World Boss Drop Rates',
            'Defeat The World Boss to obtain these essential materials:\n\n' +
            '• **Power Fragment:** 39.92%\n' +
            '• **Time Remnant:** 13.72%\n' +
            '• **World Core:** 2.99%\n' +
            '• **Vampire Omen:** 1.25%',
            theWorldBoss
        )
        .addSimpleSection(
            '🌀 F Move Mastery',
            'To unlock the F Move, complete these mastery tasks:\n\n' +
            '• **Trial of Time:** Defeat The World Boss on Hard+ Difficulty 20 Times.\n' +
            '• **NPC Stasis:** Use V move to timestop NPCs 250 Times.\n' +
            '• **Cosmic Challenge:** Defeat 10 World Bosses (Cosmic Being) using The World.\n' +
            '• **Sea Hunter:** Defeat 10 Sea Beasts using The World.',
            theWorldMastery
        ),

    'Dragon Goddess': new WikiArticle(
        'The Dragon Goddess is a legendary weapon dropped by the fearsome Kraken and Sea Beast. It is a highly coveted item for its immense power and unique abilities.'
    )
        .addSimpleSection(
            '🗡️ How to Obtain',
            'Gather a party and head to the sea to defeat the **Kraken** or **Sea Beast**. A unique feature of this drop is that once the weapon is obtained, it also automatically drops the **F move** mastery.',
            dragonGoddessImg
        )
        .addSimpleSection(
            '👹 Drop Rates',
            '• **Dragon Goddess:** 0.5% – 5%\n• **Blossom Outfit:** 3.21%\n• **Kraken Armor:** 1.60%'
        ),

    'Cosmic Being': new WikiArticle(
        'Cosmic Garou is the ultimate boss of Sea 2, possessing god-like power. Defeating him allows players to obtain the Cosmic Being weapon/spec and its associated celestial powers.'
    )
        .addSimpleSection(
            '🕒 Spawn Information',
            '• **Spawn Rate:** Every 30 minutes SERVER TIME.\n• **Location:** Middle of Punch Island (Sea 2).\n• **Health:** 500 Billion HP.\n• **Rules:** The timer only resets after he is killed; spawns do not stack.'
        )
        .addSimpleSection(
            '🌀 Special Mechanic: Adaptation',
            'Every 25% health lost, Cosmic Garou activates a random **Adaptation** (up to 3 times per life). This can cause one of the following:\n\n' +
            '• **🛡️ Harden:** Gain +10% DMG Reduction (stacks on top of his base 40% reduction).\n' +
            '• **💢 Rage:** Gain +25% more damage against players.\n' +
            '• **⚡ Accelerate:** Gain +25% movement speed (travel speed, not attack speed).\n' +
            '• **💖 Regenerate:** Heals back 10% of lost HP.\n\n' +
            'Note: Identical adaptations can occur consecutively.'
        )
        .addSimpleSection(
            '📍 Entry Requirement',
            'To face Cosmic Garou, you must locate the **Cosmic NPC**. This boss challenge is designed for high-level players seeking endgame materials.',
            cosmicNpcImg
        )
        .addSimpleSection(
            '👹 Drop Rates',
            'Defeating **Cosmic Garou** grants you a chance to obtain these rare materials. He can also directly drop the **Cosmic Being Melee** at a low chance.\n\n• **Cosmic Essence**: 37.52%\n• **Star Mark**: 19.46%\n• **Galaxy Shard**: 11.26%\n• **Cosmic Body**: 5.16%\n• **Monster Pulse**: 4.46%',
            cosmicBossImg
        )
        .addSimpleSection(
            '✨ Cosmic Being Mastery',
            'To unlock the true potential of the Cosmic Being, players must complete the following questline through the **Cosmic Master NPC**:\n\n' +
            '• **Quest 1:** Kill Cosmic Being 15 times\n' +
            '• **Quest 2:** Reach Infinite Tower Floor 90+ (5 times)\n' +
            '• **Final Quest:** Obtain the Astral Bloodline',
            cosmicMasteryImg
        ),
};
