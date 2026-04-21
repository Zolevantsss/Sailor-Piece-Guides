import { WikiArticle } from '../../types/wiki';
import bloodlineStoneImg from '../../assets/bloodline/bloodlinestone.png';

export const bloodlinesArticle = new WikiArticle(
    'Bloodlines in Sea 2 define your lineage and grant unique biological advantages. Players can roll for different bloodlines using Bloodline Stones to gain massive stat boosts and passive abilities.'
)
    .addSimpleSection(
        '💎 How to Get Bloodline Stones',
        '**Bloodline Stones** are the essential currency for rolling new bloodlines. They can be obtained as a rare drop from **all mobs in Sea 2** or by defeating **Sea Beasts**. (Drop chance is currently unknown).',
        bloodlineStoneImg
    )
    .addSimpleSection(
        '🟡 Legendary Bloodlines',
        '• **Bloodline: Astral**\n' +
        '  +30% Damage, +10% Luck Multi, +2% Lifesteal, +10% Sword Damage Multi, +35% Max HP\n' +
        '  *Mark:* +20% Sword DMG, -20% DR for 5s (8s CD)\n\n' +
        '• **Bloodline: Primordial**\n' +
        '  +27% Damage, +5% Damage Reduction, +15% Luck Multi, +10% Melee Damage Multi, +40% Max HP\n' +
        '  *Passive:* +15% for +1 drop chance (similar to Eminence)'
    )
    .addSimpleSection(
        '🟣 Epic Bloodlines',
        '• **Bloodline: Demonblood**\n' +
        '  +22% Damage, +1% Lifesteal, +7% Melee Damage Multi\n\n' +
        '• **Bloodline: Dawnbringer**\n' +
        '  +20% Damage, +2% Damage Reduction, +7% Luck Multi, +7% Sword Damage Multi, +25% Max HP'
    )
    .addSimpleSection(
        '🔵 Rare Bloodlines',
        '• **Bloodline: Nightfall**\n' +
        '  +17% Damage, +1% Lifesteal, +17% Max HP, +5% Luck Multi\n\n' +
        '• **Bloodline: Vizard**\n' +
        '  +15% Damage, +15% Gems Gain, +20% Max HP'
    )
    .addSimpleSection(
        '🟢 Uncommon Bloodlines',
        '• **Bloodline: Stormborn**\n' +
        '  +12% Damage, +10% XP Gain, +12% Max HP\n\n' +
        '• **Bloodline: Hunter**\n' +
        '  +10% Damage, +10% Money Gain, +10% Gems Gain, +15% Max HP'
    )
    .addSimpleSection(
        '⚪ Common Bloodline',
        '• **Bloodline: Commoner**\n' +
        '  +7% Damage, +10% Max HP'
    );
