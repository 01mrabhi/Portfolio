import './Approach.css'

const PHASES = [
    {
        num: 'Phase 1',
        icon: '🔍',
        title: 'Planning & Strategy',
        desc: 'Every great product starts with deep understanding. I research, plan, and architect before writing a single line of code.',
        steps: [
            'User research & requirement gathering',
            'UI/UX wireframing & design system',
            'Technical architecture & stack selection',
        ],
    },
    {
        num: 'Phase 2',
        icon: '⚡',
        title: 'Build & Develop',
        desc: 'With a solid plan in place, I move fast — building pixel-perfect interfaces backed by robust, scalable code.',
        steps: [
            'Frontend development (React / Next.js)',
            'Backend APIs & database integration',
            'Testing, debugging & code review',
        ],
    },
    {
        num: 'Phase 3',
        icon: '🚀',
        title: 'Launch & Optimize',
        desc: "Ship it, monitor it, improve it. I hand off clean code with documentation and ensure everything runs smoothly in production.",
        steps: [
            'Deployment & CI/CD pipeline setup',
            'Performance & SEO optimization',
            'Ongoing support & iteration',
        ],
    },
]

const Approach = () => {
    return (
        <section className="approach-section" id="approach">
            <div className="container">
                {/* Header */}
                <div className="approach-header">
                    <p className="section-eyebrow">How I work</p>
                    <h2 className="approach-heading">
                        My <span className="accent">Approach</span>
                    </h2>
                </div>

                {/* Phase cards */}
                <div className="phases-grid">
                    {PHASES.map((phase) => (
                        <div className="phase-card" key={phase.num}>
                            {/* Canvas-reveal glow */}
                            <div className="phase-glow-bg" />
                            <div className="phase-glow-scan" />

                            {/* Corner marks */}
                            <div className="phase-corners" />

                            {/* Icon */}
                            <div className="phase-icon-area">
                                <div className="phase-icon-ring">{phase.icon}</div>
                            </div>

                            {/* Phase chip at bottom */}
                            <div className="phase-label">
                                <div className="phase-chip">
                                    <span className="phase-chip-num">{phase.num}</span>
                                    <span className="phase-chip-title">{phase.title}</span>
                                </div>
                            </div>

                            {/* Hover reveal content */}
                            <div className="phase-content">
                                <h3 className="phase-content-title">{phase.title}</h3>
                                <p className="phase-content-desc">{phase.desc}</p>
                                <div className="phase-steps">
                                    {phase.steps.map((step) => (
                                        <div className="phase-step" key={step}>
                                            <div className="phase-step-dot" />
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Approach
