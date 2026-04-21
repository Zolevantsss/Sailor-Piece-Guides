import { WikiArticle } from '../../types/wiki';
import critChanceRelic from '../../assets/relics/critchancerelic.png';
import critDamageRelic from '../../assets/relics/critdamagerelic.png';
import damageRelic from '../../assets/relics/damagerelic.png';
import luckRelic from '../../assets/relics/luckrelic.png';

export const relicsArticle = new WikiArticle(
    'Relics are ancient artifacts in Sea 2 that can be reconstructed by gathering specific quantities of parts from various strong opponents. These relics provide massive stat boosts essential for endgame builds.'
)
    .addSimpleSection(
        '🧩 Relic Parts Locations',
        'Relic parts are distributed across several islands in Sea 2. Gather them from the following enemies (Drop chances are unknown but rather low):\n\n' +
        '**Starter Island Sea 2**\n' +
        '• **Relic Parts 1 & 2:** From **Delinquent** (Lvl 12750)\n' +
        '• **Relic Parts 3 & 4:** From **Strong Fighter** (Lvl 13000)\n\n' +
        '**Bizarre Island**\n' +
        '• **Relic Parts 5 & 6:** From **Strong Bandit** (Lvl 13500)\n\n' +
        '**Punch Island**\n' +
        '• **Relic Parts 7 & 8:** From **Fast Ninja** (Lvl 14500)'
    )
    .addSimpleSection(
        '⚔️ Damage Relic',
        '**Requirements:**\n• 40x Relic Part 7\n• 40x Relic Part 8\n• 50x Relic Part 1\n• 50x Relic Part 3\n\nProvides a significant boost to all outgoing damage.',
        damageRelic
    )
    .addSimpleSection(
        '🎯 Crit Chance Relic',
        '**Requirements:**\n• 20x Relic Part 1\n• 15x Relic Part 2\n\nSignificantly increases your base critical hit probability.',
        critChanceRelic
    )
    .addSimpleSection(
        '💥 Crit Damage Relic',
        '**Requirements:**\n• 25x Relic Part 3\n• 20x Relic Part 4\n\nMaximizes the damage dealt when landing critical strikes.',
        critDamageRelic
    )
    .addSimpleSection(
        '🍀 Luck Relic',
        '**Requirements:**\n• 30x Relic Part 5\n• 25x Relic Part 6\n\nEnhances your luck for better RNG on drops and pulls.',
        luckRelic
    );
