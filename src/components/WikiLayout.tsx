import { useState } from 'react';
import WikiSidebar from './wiki/WikiSidebar';
import WikiSearch from './wiki/WikiSearch';
import WikiArticle from './wiki/WikiArticle';

const WikiLayout = () => {
    const [activeArticle, setActiveArticle] = useState('Ascension');

    const handleNavigate = (article: string) => {
        setActiveArticle(article);
    };

    return (
        <div className="flex h-screen bg-wiki-dark overflow-hidden">
            <WikiSidebar onNavigate={handleNavigate} activeArticle={activeArticle} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-wiki-card border-b border-wiki-border flex items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button className="text-wiki-textMuted hover:text-wiki-blueGlow transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <nav className="flex items-center gap-2 text-sm text-wiki-textMuted">
                            <span className="hover:text-wiki-blueGlow cursor-pointer transition-colors">Home</span>
                            <span>/</span>
                            <span className="text-wiki-text">{activeArticle}</span>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <WikiSearch />
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8">
                    <div className="mb-4">
                        <span className="text-sm text-wiki-blueGlow font-medium">Sailor Piece</span>
                    </div>
                    <WikiArticle title={activeArticle} />
                </main>
            </div>
        </div>
    );
};

export default WikiLayout;
