import './About.css'

const TECH_STACK = [
    { name: 'React', color: '#61dafb' },
    { name: 'Node.js', color: '#68a063' },
    { name: 'MongoDB', color: '#4db33d' },
    { name: 'Express', color: '#aaaaaa' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'Tailwind', color: '#38bdf8' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'Git', color: '#f05032' },
]

const CODE_SNIPPET = `// Turning ideas into reality
const developer = {
  name: 'Abhishek',
  stack: ['MERN', 'Next.js'],
  passion: 'Building beautiful
            web experiences',
  available: true 🟢
}`

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <p className="section-eyebrow">Get to know me</p>
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="bento-grid">

                    {/* Card 1 — Large collaboration card */}
                    <div className="bento-card bento-collab">
                        <div className="bento-collab-text">
                            <span className="bento-overline">My approach</span>
                            <h3>I prioritize <em>collaboration</em> and open communication above all else.</h3>
                        </div>
                        {/* Decorative laptop mockup */}
                        <div className="laptop-mockup" aria-hidden="true">
                            <div className="laptop-screen">
                                <div className="screen-bar">
                                    <span /><span /><span />
                                </div>
                                <div className="screen-content">
                                    <div className="sc-line w-70" />
                                    <div className="sc-line w-90" />
                                    <div className="sc-line w-55" />
                                    <div className="sc-line w-80" />
                                    <div className="sc-line w-40" />
                                </div>
                            </div>
                            <div className="laptop-base" />
                        </div>
                        <div className="collab-glow" />
                    </div>

                    {/* Card 2 — Tech stack */}
                    <div className="bento-card bento-tech">
                        <span className="bento-overline">I constantly try to improve</span>
                        <h3 className="bento-tech-heading">My tech stack</h3>
                        <div className="tech-tags">
                            {TECH_STACK.map(t => (
                                <span
                                    key={t.name}
                                    className="tech-tag"
                                    style={{ '--tag-color': t.color }}
                                >
                                    {t.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 3 — Stats */}
                    <div className="bento-card bento-stats">
                        <div className="stats-row">
                            <div className="stat">
                                <span className="stat-num">2+</span>
                                <span className="stat-lbl">Years of<br />Experience</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat">
                                <span className="stat-num">10+</span>
                                <span className="stat-lbl">Projects<br />Completed</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat">
                                <span className="stat-num">5+</span>
                                <span className="stat-lbl">Happy<br />Clients</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 — Personal note */}
                    <div className="bento-card bento-note">
                        <div className="note-badge">💡 About me</div>
                        <h3>Tech enthusiast with a passion for crafting <em>meaningful</em> products.</h3>
                        <p>When I'm not coding, I explore UI/UX trends, contribute to open-source, and brainstorm ideas that could become the next big thing.</p>
                    </div>

                    {/* Card 5 — Code snippet */}
                    <div className="bento-card bento-code">
                        <div className="code-header">
                            <span className="code-dot red" />
                            <span className="code-dot yellow" />
                            <span className="code-dot green" />
                            <span className="code-filename">developer.js</span>
                        </div>
                        <pre className="code-block"><code>{CODE_SNIPPET}</code></pre>
                    </div>

                    {/* Card 6 — Availability CTA */}
                    <div className="bento-card bento-cta">
                        <div className="avail-badge">
                            <span className="avail-dot" />
                            Available for work
                        </div>
                        <h3>Ready to bring your <em>vision</em> to life</h3>
                        <a href="#contact" className="bento-hire-btn">
                            Let's work together ↗
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
