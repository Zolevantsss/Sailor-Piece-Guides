import type { ArticleData } from '../../types/wiki';
import artInvImg from '../../assets/artifacts/artifactinv.png';
import artUpgImg from '../../assets/artifacts/artifactupg.png';
import artDelImg from '../../assets/artifacts/artifactdel.png';
import artifactsMainImg from '../../assets/artifacts/artifacts.png';

export const artifactsArticle: ArticleData = {
    content: 'Artifacts are powerful equipment pieces dropped by bosses, mini-bosses, and mobs. Note that they only appear as drops after you have interacted with the **Artifacts NPC** on **Snow Island**.',
    sections: [
        {
            heading: '📜 Unlock Requirements',
            text: 'Before you can start collecting artifacts, you must visit the Snow Island NPC and meet these costs:\n• **Reach Level 2,500**\n• **500,000 Cash**\n• **500 Gems**',
            image: artifactsMainImg
        },
        {
            heading: '🎒 Set Bonuses & Stats',
            text: 'Each piece belongs to a **two-piece** or **four-piece** set. Equipping matching sets grants superior bonuses. It is highly advised to focus on enhancing **Damage**, **Critical Chance**, and **Critical Damage**.\n\n**Slot Specializations:**\n• **Helmet:** Defense or Flat Defense\n• **Gloves:** Damage, Critical Chance, and Critical Damage\n• **Body:** Any stat (including HP and Lifesteal)\n• **Legs:** Damage, Defense, Flat Defense, or Damage Reduction',
            image: artInvImg
        },
        {
            heading: '✨ Upgrading & Dust',
            text: 'Upgrade your artifacts using **Dust**. You can acquire this resource by deleting spare or low-tier artifacts from your inventory.',
            image: artUpgImg
        },
        {
            heading: '⚖️ Perfect Artifact Builds',
            text: 'To optimize your character, aim for these critical ratios:\n\n• **Crit DMG Focus:** 50-65 CC to 160-180 CD\n• **Crit Chance Focus:** 70-80 CC to 120-140 CD\n• **Base DMG:** Should ideally stay between 85-90\n\n*💡 Tip: Crit Chance is generally more consistent, but Crit DMG provides the highest damage ceilings for advanced players.*',
            image: artDelImg
        }
    ]
};
