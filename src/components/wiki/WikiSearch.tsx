import { useState, useMemo, useEffect, useRef } from 'react';
import { allArticles } from '../../data/wiki';

interface WikiSearchProps {
    onNavigate: (article: string) => void;
}

const WikiSearch = ({ onNavigate }: WikiSearchProps) => {
    const [focused, setFocused] = useState(false);
    const [query, setQuery] = useState('');
    const searchRef = useRef<HTMLDivElement>(null);

    const results = useMemo(() => {
        if (!query.trim()) return [];
        const lowercaseQuery = query.toLowerCase();
        
        return Object.entries(allArticles)
            .filter(([title, data]) => {
                return (
                    title.toLowerCase().includes(lowercaseQuery) || 
                    data.content.toLowerCase().includes(lowercaseQuery) ||
                    data.sections.some(s => 
                        s.heading.toLowerCase().includes(lowercaseQuery) || 
                        s.text.toLowerCase().includes(lowercaseQuery)
                    )
                );
            })
            .map(([title]) => title)
            .slice(0, 6);
    }, [query]);

    // Keyboard shortcut (⌘K or Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                searchRef.current?.querySelector('input')?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Close results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (title: string) => {
        onNavigate(title);
        setQuery('');
        setFocused(false);
    };

    return (
        <div ref={searchRef} className={`relative transition-all duration-300 ${focused ? 'w-96' : 'w-72'}`}>
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200 ${focused ? 'text-wiki-blueGlow' : 'text-wiki-textMuted'}`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                onFocus={() => setFocused(true)}
                className="w-full pl-10 pr-4 py-2 bg-wiki-dark border border-wiki-border rounded-lg text-wiki-text placeholder-wiki-textMuted focus:outline-none focus:border-wiki-blueLight focus:ring-1 focus:ring-wiki-blueLight/50 shadow-inner transition-all duration-200"
            />
            
            {focused && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-wiki-card border border-wiki-border rounded-xl shadow-2xl overflow-hidden z-[60] backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                        {results.map((title) => (
                            <button
                                key={title}
                                onClick={() => handleSelect(title)}
                                className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-lg bg-wiki-blue/10 flex items-center justify-center text-wiki-blueGlow group-hover:bg-wiki-blue group-hover:text-white transition-colors shrink-0">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-wiki-text truncate">{title}</div>
                                    <div className="text-[10px] text-wiki-textMuted uppercase tracking-wider">Article</div>
                                </div>
                                <svg className="w-4 h-4 text-wiki-textMuted opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>
            )}
            
            {!query && (
                <kbd className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-[10px] text-wiki-textMuted bg-white/5 px-2 py-1 rounded border border-white/10 font-sans tracking-tight">⌘K</span>
                </kbd>
            )}
        </div>
    );
};

export default WikiSearch;
