import { useState, useEffect, useRef, useCallback } from 'react'
import Model from './Model'
import './ScrollExperience.css'

/* ── Section data ──────────────────────────────────────────── */
const SECTIONS = [
    {
        id: 0,
        tag: 'Who I Am',
        heading: <>Hello, I'm <span className="accent">Abhishek</span> 👋</>,
        desc: 'A passionate MERN Stack developer who loves crafting modern, aesthetic, and highly-performant web experiences. I turn ideas into living, breathing products.',
        content: 'intro',
        ctas: [
            { label: '↓ See What I Do', href: null, primary: true, scrollTo: 1 },
            { label: 'Download CV', href: '#', primary: false },
        ],
    },
    {
        id: 1,
        tag: 'What I Do',
        heading: <>Building <span className="accent">Digital</span> Experiences</>,
        desc: "From pixel-perfect UIs to robust back-ends — I architect full-stack solutions that are fast, scalable, and delightful to use.",
        content: 'skills',
        ctas: [
            { label: '↓ My Projects', href: null, primary: true, scrollTo: 2 },
        ],
    },
    {
        id: 2,
        tag: "What I've Built",
        heading: <>Explore My <span className="accent">Projects</span></>,
        desc: "Real-world applications built with modern tech. Each project is a story of a problem solved and a skill sharpened.",
        content: 'projects',
        ctas: [
            { label: 'View All Projects', href: '#projects', primary: true },
            { label: '↓ Get In Touch', href: null, primary: false, scrollTo: 3 },
        ],
    },
    {
        id: 3,
        tag: 'Get In Touch',
        heading: <>Let's <span className="accent">Work Together</span></>,
        desc: "Open to exciting freelance projects and full-time opportunities. Let's build something amazing together.",
        content: 'contact',
        ctas: [
            { label: 'Hire Me', href: '#contact', primary: true },
            { label: 'Explore Projects', href: '#projects', primary: false },
        ],
    },
]

const SKILLS = [
    { icon: '⚛️', label: 'React & Next.js' },
    { icon: '🟢', label: 'Node.js & Express' },
    { icon: '🍃', label: 'MongoDB' },
    { icon: '🎨', label: 'UI/UX Design' },
    { icon: '🔷', label: 'TypeScript' },
    { icon: '☁️', label: 'Cloud & Deployment' },
]

const PROJECTS = [
    { num: '01', name: 'Portfolio Website', tech: 'React · Three.js · Tailwind' },
    { num: '02', name: 'Full-Stack MERN App', tech: 'MongoDB · Express · React · Node' },
    { num: '03', name: 'E-Commerce Platform', tech: 'Next.js · Stripe · PostgreSQL' },
]

/* ── Sub-content renderers ─────────────────────────────────── */
const SectionContent = ({ type }) => {
    if (type === 'skills') {
        return (
            <div className="skills-grid">
                {SKILLS.map(s => (
                    <div className="skill-pill" key={s.label}>
                        <span className="icon">{s.icon}</span>
                        {s.label}
                    </div>
                ))}
            </div>
        )
    }
    if (type === 'projects') {
        return (
            <div className="projects-mini">
                {PROJECTS.map(p => (
                    <div className="project-card-mini" key={p.num}>
                        <span className="project-num">{p.num}</span>
                        <div className="project-info">
                            <h4>{p.name}</h4>
                            <p>{p.tech}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    if (type === 'contact') {
        return (
            <div className="contact-links">
                <a href="mailto:abhishek@example.com" className="contact-link">
                    <span className="c-icon">📧</span>
                    <div>
                        <div className="c-label">Email</div>
                        <div className="c-value">abhishek@example.com</div>
                    </div>
                </a>
                <a href="https://wa.me/9999999999" className="contact-link" target="_blank" rel="noreferrer">
                    <span className="c-icon">💬</span>
                    <div>
                        <div className="c-label">WhatsApp</div>
                        <div className="c-value">+91 99999 99999</div>
                    </div>
                </a>
                <a href="https://github.com" className="contact-link" target="_blank" rel="noreferrer">
                    <span className="c-icon">💻</span>
                    <div>
                        <div className="c-label">GitHub</div>
                        <div className="c-value">github.com/abhishek</div>
                    </div>
                </a>
            </div>
        )
    }
    return null
}

/* ── Main component ────────────────────────────────────────── */
export default function ScrollExperience() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [activeSection, setActiveSection] = useState(0)
    const [isVisible, setIsVisible] = useState(true)   // hide stage once scrolled past driver
    const wrapperRef = useRef(null)

    // Track scroll and compute progress 0→1 across the 400vh wrapper
    const handleScroll = useCallback(() => {
        const wrapper = wrapperRef.current
        if (!wrapper) return

        const rect = wrapper.getBoundingClientRect()
        const totalScroll = wrapper.offsetHeight - window.innerHeight
        const scrolled = -rect.top          // how much of wrapper has scrolled past top
        const progress = Math.max(0, Math.min(1, scrolled / totalScroll))

        // Hide fixed stage once the driver is FULLY above the viewport
        // rect.bottom <= 0 means the entire 400vh block is above the screen
        setIsVisible(rect.bottom > 0 && rect.top < window.innerHeight)

        setScrollProgress(progress)
        setActiveSection(Math.min(3, Math.floor(progress * 4)))
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    // Scroll to a numbered section (0-3) on CTA click
    const scrollToSection = useCallback((sectionIdx) => {
        const wrapper = wrapperRef.current
        if (!wrapper) return
        const totalScroll = wrapper.offsetHeight - window.innerHeight
        const target = (sectionIdx / 4) * totalScroll + wrapper.offsetTop
        window.scrollTo({ top: target, behavior: 'smooth' })
    }, [])

    // Glow color per section
    const glowColors = ['rgba(59,130,246,0.12)', 'rgba(139,92,246,0.12)', 'rgba(6,182,212,0.12)', 'rgba(236,72,153,0.12)']

    return (
        <div className="scroll-driver" ref={wrapperRef} id="home">
            {/* ── Fixed stage — hidden once scrolled past the driver ── */}
            <div
                className="scroll-stage"
                style={{
                    visibility: isVisible ? 'visible' : 'hidden',
                    pointerEvents: isVisible ? 'auto' : 'none',
                }}
            >

                {/* Full-screen 3D canvas */}
                <div className="canvas-bg">
                    <Model scrollProgress={scrollProgress} />
                </div>

                {/* Subtle glow ring that shifts color per section */}
                <div
                    className="model-glow"
                    style={{ background: `radial-gradient(circle, ${glowColors[activeSection]} 0%, transparent 70%)` }}
                />

                {/* Section text overlays */}
                <div className="sections-overlay">
                    {SECTIONS.map((sec) => (
                        <div
                            key={sec.id}
                            className={`section-panel${activeSection === sec.id ? ' active' : ''}`}
                        >
                            <div className="section-tag">
                                <span className="tag-dot" />
                                {sec.tag}
                            </div>

                            <h2 className="section-heading">{sec.heading}</h2>
                            <p className="section-desc">{sec.desc}</p>

                            <SectionContent type={sec.content} />

                            <div className="section-ctas">
                                {sec.ctas.map((cta, i) =>
                                    cta.scrollTo !== undefined ? (
                                        <button
                                            key={i}
                                            className={cta.primary ? 'cta-primary' : 'cta-secondary'}
                                            onClick={() => scrollToSection(cta.scrollTo)}
                                        >
                                            {cta.label}
                                        </button>
                                    ) : (
                                        <a
                                            key={i}
                                            href={cta.href}
                                            className={cta.primary ? 'cta-primary' : 'cta-secondary'}
                                        >
                                            {cta.label}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Progress dots (right side) ── */}
                <div className="progress-dots">
                    {SECTIONS.map((sec) => (
                        <div
                            key={sec.id}
                            className={`pd-dot${activeSection === sec.id ? ' active' : ''}`}
                            data-label={sec.tag}
                            onClick={() => scrollToSection(sec.id)}
                            title={sec.tag}
                        />
                    ))}
                </div>

                {/* ── Section counter ── */}
                <div className="section-counter">
                    <span className="current">{String(activeSection + 1).padStart(2, '0')}</span>
                    {' / '}
                    {String(SECTIONS.length).padStart(2, '0')}
                </div>

                {/* ── Scroll cue (hidden after first scroll) ── */}
                <div className={`scroll-cue${scrollProgress > 0.05 ? ' hidden' : ''}`}>
                    <span>Scroll</span>
                    <div className="scroll-cue-arrow" />
                </div>
            </div>
        </div>
    )
}
