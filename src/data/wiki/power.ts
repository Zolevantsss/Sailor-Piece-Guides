import { WikiArticle } from '../../types/wiki';
import powerNpc from '../../assets/Sea 1/power/powerpassivenpc.png';
import powerShard from '../../assets/Sea 1/power/powerpassiveshard.png';
import powerUI from '../../assets/Sea 1/power/powerpassiveUI.png';

export const powerArticle = new WikiArticle(
    'The Moon Update in Sailor Piece added a new Power mechanic that makes players get even stronger stats, like damage, HP, or even crit chance. But to unlock your new powers, you will need a legendary material in the game called Power Shard.'
)
    .addSimpleSection(
        '💪 Character Power System',
        'Unlock significant stat boosts to push your character to the absolute limit. This system allows for further specialization in Damage, HP, and Critical Chance.',
        powerUI
    )
    .addSimpleSection(
        '💎 How to get Power Shards?',
        'You can farm the **Power Shards** from any mob NPCs, but it’s better to grind on stronger NPCs so the chances are higher.',
        powerShard
    )
    .addSimpleSection(
        '📍 Power NPC Location',
        'Visit the specialized NPC in **Lawless Island** to channel your Power Shards into permanent character strength.',
        powerNpc
    );
