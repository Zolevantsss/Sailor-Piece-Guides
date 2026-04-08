import { useState } from 'react';
import WikiSidebar from './wiki/WikiSidebar';
import WikiSearch from './wiki/WikiSearch';
import WikiArticle from './wiki/WikiArticle';

const WikiLayout = () => {
    const [activeArticle, setActiveArticle] = useState('All Haki Location');
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavigate = (article: string, section?: string) => {
        setActiveArticle(article);
        setActiveSection(section || null);
        setIsSidebarOpen(false); // Close on mobile navigation
    };

    return (
        <div className="flex h-screen bg-wiki-dark overflow-hidden relative">
            {/* Sidebar with mobile classes */}
            <div className={`
                fixed inset-0 z-50 md:relative md:inset-auto md:z-0
                transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <WikiSidebar
                    onNavigate={handleNavigate}
                    activeArticle={activeArticle}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>

            {/* Backdrop for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <div className="flex-1 flex flex-col overflow-hidden min-w-0">
                <header className="h-16 bg-wiki-card border-b border-wiki-border flex items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="md:hidden text-wiki-textMuted hover:text-wiki-blueGlow transition-colors p-2"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <nav className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-wiki-textMuted whitespace-nowrap overflow-hidden text-ellipsis">
                            <span className="hidden sm:inline hover:text-wiki-blueGlow cursor-pointer transition-colors">Home</span>
                            <span className="hidden sm:inline">/</span>
                            <span className="text-wiki-text truncate max-w-[150px] md:max-w-none">{activeArticle}</span>
                        </nav>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 shrink-0">
                        <div className="hidden sm:block">
                            <WikiSearch onNavigate={handleNavigate} />
                        </div>
                        <button className="sm:hidden text-wiki-textMuted p-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="mb-2 md:mb-4">
                        <span className="text-[10px] md:text-sm text-wiki-blueGlow font-medium px-2 py-0.5 md:py-1 bg-wiki-blue/10 rounded-full">Sailor Piece</span>
                    </div>
                    <WikiArticle title={activeArticle} activeSection={activeSection} />
                </main>
            </div>
        </div>
    );
};

export default WikiLayout;
