import { WikiArticle } from '../../types/wiki';
import auraChestImg from '../../assets/Sea 1/auracosme/aurachest.png';
import auraRarityImg from '../../assets/Sea 1/auracosme/aurararity.png';
import cosmeCrateImg from '../../assets/Sea 1/auracosme/cosmecrate.png';
import cosmeRarityImg from '../../assets/Sea 1/auracosme/cosmerarity.png';

export const cosmeticsArticle = new WikiArticle(
    'Auras and Cosmetics are rare drops that provide both stunning visual effects and significant stat boosts to aid in your character progression.'
)
.addSimpleSection(
    '✨ Aura System & Buffs',
    'Auras are powerful visual effects that also provide damage and HP boosts. You can obtain them by opening Aura Crates, which have a very low drop rate (under 0.004%) from any mob or boss.\n\n**Aura Rarity Buffs:**\n• **Common:** +5% DMG, +7.5% HP\n• **Uncommon:** +7.5% DMG, +10% HP\n• **Rare:** +10% DMG, +12.5% HP\n• **Epic:** +12.5% DMG, +15% HP\n• **Legendary:** +15% DMG, +20% HP',
    auraRarityImg
)
.addSimpleSection(
    '📦 Obtaining Aura Crates',
    'Aura Crates are required to unlock new auras. They can be found across all islands by defeating any NPCs or bosses. Be prepared for a long hunt, as the global drop rate is extremely rare.',
    auraChestImg
)
.addSimpleSection(
    '👒 Cosmetic Crates',
    'Similar to auras, Cosmetic Crates provide unique character customizations and can also offer damage buffs. These crates drop with a rate ranging from 0.002% to 0.0028%, with the chance slightly increasing based on the Level of the NPC defeated.',
    cosmeCrateImg
)
.addSimpleSection(
    '🎭 Cosmetic Rarities',
    'Explore a wide variety of cosmetic tiers, each providing its own unique aesthetic and potentially helpful buffs. Rare cosmetics are a sign of dedication and luck across the seas.',
    cosmeRarityImg
);
