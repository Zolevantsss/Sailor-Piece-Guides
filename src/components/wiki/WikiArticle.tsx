import { useEffect, useRef, useCallback, type JSX } from 'react';
import { allArticles } from '../../data/wiki';

interface WikiArticleProps {
    title: string;
    activeSection?: string | null;
    searchHighlight?: string | null;
    onClearHighlight?: () => void;
    onNavigate: (article: string, section?: string) => void;
}

const WikiArticle = ({ title, activeSection, searchHighlight, onClearHighlight, onNavigate }: WikiArticleProps) => {
    const article = allArticles[title] || {
        content: 'This article is currently being written. Check back soon for updates.',
        sections: []
    };

    // Calculate navigation
    const articleKeys = Object.keys(allArticles);
    const currentIndex = articleKeys.indexOf(title);
    const prevArticle = currentIndex > 0 ? articleKeys[currentIndex - 1] : null;
    const nextArticle = currentIndex < articleKeys.length - 1 ? articleKeys[currentIndex + 1] : null;

    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    const highlightScrolledRef = useRef(false);

    // Scroll to the section heading when navigated via search
    useEffect(() => {
        if (activeSection && sectionRefs.current[activeSection]) {
            sectionRefs.current[activeSection]?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Add a temporary highlight effect
            const el = sectionRefs.current[activeSection];
            if (el) {
                el.classList.add('ring-2', 'ring-wiki-blueGlow', 'ring-offset-4', 'ring-offset-wiki-dark', 'rounded-lg');
                setTimeout(() => {
                    el.classList.remove('ring-2', 'ring-wiki-blueGlow', 'ring-offset-4', 'ring-offset-wiki-dark', 'rounded-lg');
                }, 2000);
            }
        }
    }, [activeSection, title]);

    // Scroll to the first highlighted match after render
    useEffect(() => {
        if (searchHighlight) {
            highlightScrolledRef.current = false;
            // Small delay to allow the DOM to render the highlight marks
            const timer = setTimeout(() => {
                const firstMark = document.querySelector('.search-highlight-mark');
                if (firstMark) {
                    firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);

            // Auto-clear highlight after 5 seconds
            const clearTimer = setTimeout(() => {
                onClearHighlight?.();
            }, 5000);

            return () => {
                clearTimeout(timer);
                clearTimeout(clearTimer);
            };
        }
    }, [searchHighlight, title, onClearHighlight]);

    // Helper: wrap matching text with highlight spans
    const highlightText = useCallback((text: string, isFirstRef: { value: boolean }) => {
        if (!searchHighlight) return text;

        const query = searchHighlight.toLowerCase();
        const parts: (string | JSX.Element)[] = [];
        let remaining = text;
        let keyCounter = 0;

        while (remaining.length > 0) {
            const idx = remaining.toLowerCase().indexOf(query);
            if (idx === -1) {
                parts.push(remaining);
                break;
            }

            // Text before match
            if (idx > 0) {
                parts.push(remaining.substring(0, idx));
            }

            // The match itself
            const matchedText = remaining.substring(idx, idx + query.length);
            const isFirst = isFirstRef.value;
            isFirstRef.value = false;

            parts.push(
                <mark
                    key={`hl-${keyCounter++}`}
                    className={`search-highlight-mark bg-amber-400/30 text-amber-200 rounded-sm px-0.5 py-0.5 border-b-2 border-amber-400 animate-highlight-pulse ${isFirst ? 'first-highlight' : ''}`}
                >
                    {matchedText}
                </mark>
            );

            remaining = remaining.substring(idx + query.length);
        }

        return parts.length > 0 ? parts : text;
    }, [searchHighlight]);

    const renderFormattedText = (text: string) => {
        // Track whether we've found the first highlight match (for scroll targeting)
        const isFirstRef = { value: true };

        return text.split('\n').map((line, lineIdx) => {
            // Handle bullet points
            const isBullet = line.trim().startsWith('•');
            const cleanLine = isBullet ? line.trim().substring(1).trim() : line;

            // Handle bold and italic text
            const parts = cleanLine.split(/(\*\*.*?\*\*|\*[^*].*?\*)/g);
            const formattedLine = parts.map((part, partIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    const innerText = part.slice(2, -2);
                    return (
                        <strong key={partIdx} className="text-white font-bold px-1.5 py-0.5 bg-white/5 rounded mx-0.5 border border-white/10 ring-1 ring-white/5 shadow-sm">
                            {highlightText(innerText, isFirstRef)}
                        </strong>
                    );
                }
                if (part.startsWith('*') && part.endsWith('*')) {
                    const innerText = part.slice(1, -1);
                    return (
                        <em key={partIdx} className="text-wiki-blueLight/90 italic">
                            {highlightText(innerText, isFirstRef)}
                        </em>
                    );
                }
                return <span key={partIdx}>{highlightText(part, isFirstRef)}</span>;
            });

            if (isBullet) {
                return (
                    <div key={lineIdx} className="flex items-start gap-3 mb-2 pl-2">
                        <span className="text-wiki-blueGlow font-bold mt-1 shrink-0">•</span>
                        <div className="flex-1">{formattedLine}</div>
                    </div>
                );
            }

            if (line.trim() === '') {
                return <div key={lineIdx} className="h-4" />;
            }

            return (
                <p key={lineIdx} className="mb-3 leading-relaxed">
                    {formattedLine}
                </p>
            );
        });
    };

    return (
        <article className="max-w-4xl pb-20">
            <header className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-wiki-border">
                <h1 className="text-2xl md:text-3xl font-bold text-wiki-text mb-3">{title}</h1>
                <div className="text-wiki-textMuted text-base md:text-lg leading-relaxed">{renderFormattedText(article.content)}</div>
            </header>

            <div className="space-y-8 md:space-y-12">
                {article.sections.map((section, index) => (
                    <section
                        key={index}
                        className="group scroll-mt-24 transition-all duration-500"
                        ref={el => { sectionRefs.current[section.heading] = el; }}
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-wiki-blueGlow mb-4 md:mb-6 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                            {section.heading}
                        </h2>
                        {section.image && (
                            <div className="mb-4 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden border border-wiki-border/50 shadow-2xl bg-wiki-darkHover ring-1 ring-white/10">
                                {section.mediaType === 'video' ? (
                                    <video
                                        src={section.image}
                                        controls
                                        className={`${section.imageSize === 'small' ? 'w-1/2 sm:w-1/3' :
                                            section.imageSize === 'medium' ? 'w-full sm:w-1/2' :
                                                'w-full'
                                            } h-auto object-cover`}
                                    />
                                ) : (
                                    <img
                                        src={section.image}
                                        alt={section.heading}
                                        className={`${section.imageSize === 'small' ? 'w-1/2 sm:w-1/3' :
                                            section.imageSize === 'medium' ? 'w-full sm:w-1/2' :
                                                'w-full'
                                            } h-auto object-cover hover:scale-[1.02] transition-transform duration-500`}
                                    />
                                )}
                            </div>
                        )}
                        <div className="text-wiki-text text-sm md:text-base leading-relaxed bg-wiki-card/60 p-4 md:p-8 rounded-xl md:rounded-2xl border border-wiki-border/40 shadow-inner backdrop-blur-sm">
                            {renderFormattedText(section.text)}
                        </div>
                    </section>
                ))}
            </div>

            <footer className="mt-12 pt-6 border-t border-wiki-border flex justify-between items-center gap-4">
                {prevArticle ? (
                    <button
                        onClick={() => onNavigate(prevArticle)}
                        className="flex-1 max-w-[200px] text-left p-4 rounded-xl border border-wiki-border hover:border-wiki-blue/50 hover:bg-wiki-blue/5 transition-all group"
                    >
                        <div className="text-[10px] text-wiki-textMuted uppercase tracking-wider mb-1 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Previous
                        </div>
                        <div className="text-sm font-semibold text-wiki-text group-hover:text-wiki-blueGlow transition-colors truncate">
                            {prevArticle}
                        </div>
                    </button>
                ) : <div className="flex-1" />}

                {nextArticle ? (
                    <button
                        onClick={() => onNavigate(nextArticle)}
                        className="flex-1 max-w-[200px] text-right p-4 rounded-xl border border-wiki-border hover:border-wiki-blue/50 hover:bg-wiki-blue/5 transition-all group"
                    >
                        <div className="text-[10px] text-wiki-textMuted uppercase tracking-wider mb-1 flex items-center gap-1 justify-end">
                            Next
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <div className="text-sm font-semibold text-wiki-text group-hover:text-wiki-blueGlow transition-colors truncate">
                            {nextArticle}
                        </div>
                    </button>
                ) : <div className="flex-1" />}
            </footer>
        </article>
    );
};

export default WikiArticle;
