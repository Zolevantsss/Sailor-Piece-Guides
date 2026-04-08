import { useEffect, useRef } from 'react';
import { allArticles } from '../../data/wiki';

interface WikiArticleProps {
    title: string;
    activeSection?: string | null;
}

const WikiArticle = ({ title, activeSection }: WikiArticleProps) => {
    const article = allArticles[title] || {
        content: 'This article is currently being written. Check back soon for updates.',
        sections: []
    };
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

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

    const renderFormattedText = (text: string) => {
        return text.split('\n').map((line, lineIdx) => {
            // Handle bullet points
            const isBullet = line.trim().startsWith('•');
            const cleanLine = isBullet ? line.trim().substring(1).trim() : line;

            // Handle bold and italic text
            const parts = cleanLine.split(/(\*\*.*?\*\*|\*[^*].*?\*)/g);
            const formattedLine = parts.map((part, partIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                        <strong key={partIdx} className="text-white font-bold px-1.5 py-0.5 bg-white/5 rounded mx-0.5 border border-white/10 ring-1 ring-white/5 shadow-sm">
                            {part.slice(2, -2)}
                        </strong>
                    );
                }
                if (part.startsWith('*') && part.endsWith('*')) {
                    return (
                        <em key={partIdx} className="text-wiki-blueLight/90 italic">
                            {part.slice(1, -1)}
                        </em>
                    );
                }
                return part;
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

            <footer className="mt-12 pt-6 border-t border-wiki-border flex justify-between items-center">
                <button className="text-wiki-textMuted hover:text-wiki-blueGlow transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                </button>
                <button className="text-wiki-textMuted hover:text-wiki-blueGlow transition-colors text-sm flex items-center gap-2">
                    Next
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </footer>
        </article>
    );
};

export default WikiArticle;
