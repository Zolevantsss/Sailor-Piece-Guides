import type { ArticleData } from '../../types/wiki';
import obshaki from '../../assets/hakis/obshaki.png';
import armhaki from '../../assets/hakis/armhaki.png';
import conqhaki from '../../assets/hakis/conqhaki.png';

export const hakiArticle: ArticleData = {
    content: 'Your definitive guide to finding Haki across the seas. Each Haki type provides significant combat advantages and is required for character progression.',
    sections: [
        {
            heading: '💠 Observation Haki (Kenbunshoku)',
            text: `**Location:** Desert Island\n\n**Requirements:**\n• 300 Gems\n• 250,000 Coins\n\nObservation Haki allows you to dodge incoming attacks automatically and see through obstacles. It is essential for high-level survival.`,
            image: obshaki
        },
        {
            heading: '🛑 Armament Haki (Bushoshoku)',
            text: `**Location:** Snow Island\n\n**Requirements:**\n• 250 Gems\n• 250,000 Coins\n\n**Questlines:**\n1. **NPC Massacre:** Defeat 250 NPCs\n2. **Skill Mastery:** Use your Z skill 100 times\n3. **Physical Training:** Punch 1K times\n\n*💡 Recommendation: We suggest completing these on Starter Island where NPCs are easier to manage and group up.*`,
            image: armhaki
        },
        {
            heading: '👑 Conqueror\'s Haki (Haoshoku)',
            text: `**Location:** Shibuya Station\n\n**Requirements:**\n• 1 Conqueror Fragment\n• Armament Haki Level 40\n• Level 5 Ascension\n• Observation Haki Level 25\n\n**How to Get the Conqueror Fragment:**\nThe Mythical rarity **Conqueror Fragment** has a chance to drop from any NPC in the game. Stronger foes have a significantly higher chance of dropping it.\n\n**Ultimate Questlines:**\n• **Combat Intensity:** Activate Armament Haki and defeat 500 NPCs\n• **Mental Focus:** Dodge 500 attacks using Observation Haki\n• **Boss Slayer:** Defeat 200 bosses\n• **Dungeon Master:** Complete 25 dungeons`,
            image: conqhaki
        },
    ]
};
