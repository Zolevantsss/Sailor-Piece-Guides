import type { ArticleData, Section } from '../../types/wiki';

interface BuildDetails {
    rune: string;
    trait: string;
    artifact: string;
    mainStat: string;
    substats: string[];
    skillTree: string;
    bossRush: string;
    tower: string;
    specPassives: string;
    power: string;
    haki: string;
    observationHaki: string;
    conquerorsHaki: string;
    runeStat: string;
    stats: string;
    sword: string;
    blessing: string;
    ascension: string;
    melee: string;
    fruit: string;
    race: string;
    accessory: string;
    clan: string;
    title: string;
}

/**
 * Represents a build configuration in the game.
 * Using a class makes it easier to manage and ensures consistent formatting.
 */
class Build {
    name: string;
    emoji: string;
    data: BuildDetails;

    constructor(name: string, emoji: string, data: BuildDetails) {
        this.name = name;
        this.emoji = emoji;
        this.data = data;
    }

    toSection(): Section {
        return {
            heading: `${this.emoji} ${this.name.toUpperCase()}`,
            text: [
                `• **Best Rune:** ${this.data.rune}`,
                `• **Best Trait:** ${this.data.trait}`,
                `• **Best Artifact:** ${this.data.artifact}`,
                `• **[Main Artifact Stat - ${this.data.mainStat}]**`,
                `• **[Substats Listed Below]**`,
                ...this.data.substats.map(s => `  - ${s}`),
                `• **Max Skill Tree System:** ${this.data.skillTree}`,
                `• **${this.data.bossRush}**`,
                `• **${this.data.tower}**`,
                `• **Spec Passives:** ${this.data.specPassives}`,
                `• **Power:** ${this.data.power}`,
                `• **Max Haki:** ${this.data.haki}`,
                `• **Max Observation Haki:** ${this.data.observationHaki}`,
                `• **Max Conqueror’s Haki:** ${this.data.conquerorsHaki}`,
                `• **Max Rune Stat:** ${this.data.runeStat}`,
                `• **Best Stats:** ${this.data.stats}`,
                `• **Best Sword:** ${this.data.sword}`,
                `• **Max Blessing:** ${this.data.blessing}`,
                `• **Max Ascension:** ${this.data.ascension}`,
                `• **Best Melee:** ${this.data.melee}`,
                `• **Best Fruit:** ${this.data.fruit}`,
                `• **Best Race:** ${this.data.race}`,
                `• **Best Accessory:** ${this.data.accessory}`,
                `• **Best Clan:** ${this.data.clan}`,
                `• **Best Farming Title:** ${this.data.title}`
            ].join('\n')
        };
    }
}

const buildData: BuildDetails = {
    rune: 'Primordial Rune',
    trait: 'Emperor',
    artifact: 'Abyssal Crown set (Legendary)',
    mainStat: 'CD OR DMG',
    substats: [
        'CC (Critical Chance)',
        'CD (Critical Damage)',
        'DMG (Damage)'
    ],
    skillTree: '490 SP',
    bossRush: 'Max Boss Rush Upgrades',
    tower: 'Max Tower Upgrades',
    specPassives: 'Rampage (Good rng)',
    power: 'Colossus',
    haki: 'Level 100',
    observationHaki: 'Level 50',
    conquerorsHaki: 'Level 35',
    runeStat: 'Level 60',
    stats: 'Z or SSS on all',
    sword: 'Atomic',
    blessing: '10',
    ascension: 'X (10)',
    melee: 'Moon Slayer',
    fruit: 'Light/Quake',
    race: 'Warlord',
    accessory: 'Ice Queen Outfit E10',
    clan: 'Frostbane / Alter',
    title: 'Frost Empress (87.5% Damage Buff)'
};

const luckBuild = new Build('Luck Build', '🍀', buildData);
const damageBuild = new Build('Damage Build', '⚔️', buildData);

export const buildsArticle: ArticleData = {
    content: 'Ready to dominate? Here are the most optimized builds for different playstyles in Sailor Piece. These setups are designed to maximize your efficiency whether you\'re hunting for rare items or pushing maximum DPS.',
    sections: [
        luckBuild.toSection(),
        damageBuild.toSection()
    ]
};
