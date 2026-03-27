import { useState } from 'react';

const WikiSearch = () => {
    const [focused, setFocused] = useState(false);

    return (
        <div className={`relative transition-all duration-300 ${focused ? 'w-96' : 'w-72'}`}>
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200 ${focused ? 'text-wiki-blueGlow' : 'text-wiki-textMuted'}`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
                type="text"
                placeholder="Search documentation..."
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full pl-10 pr-4 py-2 bg-wiki-dark border border-wiki-border rounded-lg text-wiki-text placeholder-wiki-textMuted focus:outline-none focus:border-wiki-blueLight focus:ring-1 focus:ring-wiki-blueLight/50 transition-all duration-200"
            />
            <kbd className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span className="text-xs text-wiki-textMuted bg-wiki-border px-1.5 py-0.5 rounded">⌘K</span>
            </kbd>
        </div>
    );
};

export default WikiSearch;
