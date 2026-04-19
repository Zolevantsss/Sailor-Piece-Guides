import { useState } from 'react';
import logo from '../../assets/logo.png';

interface WikiSidebarProps {
    onNavigate: (article: string) => void;
    activeArticle: string;
    onClose?: () => void;
}

const WikiSidebar = ({ onNavigate, activeArticle, onClose }: WikiSidebarProps) => {
    const [openMenus, setOpenMenus] = useState<string[]>(['Puzzle Location', 'Weapons']);
    const [currentSea, setCurrentSea] = useState<'Sea 1' | 'Sea 2'>('Sea 1');

    const toggleMenu = (title: string) => {
        setOpenMenus(prev => 
            prev.includes(title) 
                ? prev.filter(t => t !== title) 
                : [...prev, title]
        );
    };

    const categories = [
        {
            title: 'Sailor Piece',
            items: [
                'All Haki Location',
                'All Materials',
                'Artifacts',
                'Ascension',
                'Aura/Cosmetics',
                'Builds',
                'Power',
                'Progress',
                {
                    title: 'Puzzle Location',
                    subItems: [
                        'Slime Puzzle',
                        'Demonite Puzzle',
                        'Hogyoku Quest Puzzle',
                        'Ancient Puzzle'
                    ]
                },
                {
                    title: 'Weapons',
                    subItems: [
                        'Atomic Sword',
                        'Abyssal Empress (Acheron)',
                        'Esdeath (General of Ice)',
                        'Kokushibo (Upper Moon One)',
                        'Madara (The Ghost of Uchiha)'
                    ]
                },
                'Rerolls',
                'Runes',
                'Skill Tree',
                'Spec Passive',
                'Titles',
                'Tower of Infinity'
            ],
        },
        {
            title: 'Guide to Sea 2',
            items: [
                'All Location Guide Ancient Fragment',
                'Map Pieces 🧩',
            ],
        }
    ];

    const filteredCategories = categories.filter(_category => {
        if (currentSea === 'Sea 1') return true; // Sea 1 contains everything for now
        if (currentSea === 'Sea 2') return false; // Sea 2 is blank for now
        return true;
    });

    return (
        <aside className="w-64 bg-wiki-dark border-r border-wiki-border flex flex-col h-full shrink-0">
            <div className="p-4 border-b border-wiki-border">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <img 
                            src={logo} 
                            alt="Hexenzirkel Logo" 
                            className="w-10 h-10 object-contain mix-blend-screen" 
                        />
                        <h2 className="text-xl font-bold text-wiki-blueGlow">
                            Hexenzirkel
                        </h2>
                    </div>
                    {onClose && (
                        <button 
                            onClick={onClose}
                            className="md:hidden text-wiki-textMuted hover:text-white p-1"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Sea Switcher */}
            <div className="px-4 py-4 border-b border-wiki-border/50 bg-wiki-dark/50">
                <div className="flex bg-wiki-darkHover p-1 rounded-xl border border-wiki-border/50 shadow-inner">
                    <button 
                        onClick={() => setCurrentSea('Sea 1')}
                        className={`flex-1 flex items-center justify-center py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                            currentSea === 'Sea 1' 
                                ? 'bg-wiki-blue text-white shadow-lg shadow-wiki-blue/20' 
                                : 'text-wiki-textMuted hover:text-wiki-text'
                        }`}
                    >
                        SEA 1
                    </button>
                    <button 
                        onClick={() => setCurrentSea('Sea 2')}
                        className={`flex-1 flex items-center justify-center py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                            currentSea === 'Sea 2' 
                                ? 'bg-wiki-blue text-white shadow-lg shadow-wiki-blue/20' 
                                : 'text-wiki-textMuted hover:text-wiki-text'
                        }`}
                    >
                        SEA 2
                    </button>
                </div>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-wiki-border">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-xs font-semibold text-wiki-textMuted uppercase tracking-wider mb-2 px-3">
                                {category.title}
                            </h3>
                            <ul className="space-y-1">
                                {category.items.map((item) => {
                                    if (typeof item === 'string') {
                                        return (
                                            <li key={item}>
                                                <button
                                                    onClick={() => onNavigate(item)}
                                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${activeArticle === item
                                                        ? 'bg-wiki-blue text-white font-medium shadow-lg shadow-wiki-blue/20'
                                                        : 'text-wiki-text hover:bg-wiki-darkHover hover:text-wiki-blueGlow'
                                                        }`}
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        );
                                    } else {
                                        const isSubItemActive = item.subItems.includes(activeArticle);
                                        const isOpen = openMenus.includes(item.title) || isSubItemActive;

                                        return (
                                            <li key={item.title} className="space-y-1">
                                                <button
                                                    onClick={() => {
                                                        toggleMenu(item.title);
                                                        onNavigate(item.subItems[0]);
                                                    }}
                                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between ${isSubItemActive || activeArticle === item.title
                                                        ? 'bg-wiki-darkHover text-wiki-blueGlow font-medium border border-wiki-border/50'
                                                        : 'text-wiki-text hover:bg-wiki-darkHover hover:text-wiki-blueGlow'
                                                        }`}
                                                >
                                                    <span>{item.title}</span>
                                                    <svg 
                                                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                                                        fill="none" 
                                                        viewBox="0 0 24 24" 
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {isOpen && (
                                                    <ul className="ml-4 pl-2 border-l border-wiki-border/50 space-y-1 mt-1">
                                                        {item.subItems.map((subItem) => (
                                                            <li key={subItem}>
                                                                <button
                                                                    onClick={() => onNavigate(subItem)}
                                                                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all duration-200 ${activeArticle === subItem
                                                                        ? 'bg-wiki-blue/10 text-wiki-blueGlow font-semibold border-l-2 border-wiki-blue'
                                                                        : 'text-wiki-textMuted hover:text-wiki-blueGlow hover:bg-wiki-darkHover'
                                                                        }`}
                                                                >
                                                                    {subItem}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center h-40 text-center opacity-40">
                        <svg className="w-12 h-12 mb-3 text-wiki-blueGlow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-sm font-medium">Sea 2 is currently empty</p>
                        <p className="text-[10px] uppercase tracking-widest mt-1">Coming soon</p>
                    </div>
                )}
            </nav>

            <div className="p-4 border-t border-wiki-border">
                <div className="text-xs text-wiki-textMuted text-center">
                    <p>Hexenzirkel v1.1</p>
                    <p className="mt-1 opacity-50">Last updated: Mar 2026</p>
                </div>
            </div>
        </aside>
    );
};

export default WikiSidebar;
