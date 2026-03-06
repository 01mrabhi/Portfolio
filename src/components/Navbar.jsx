import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: null, sectionIdx: 1 },   // scrolls to "What I Do" in experience
    { label: 'Contact', href: '#contact' },
]

// Scroll helper to jump to a section inside the ScrollExperience
function scrollToExperienceSection(sectionIdx) {
    const wrapper = document.getElementById('home')
    if (!wrapper) return
    const totalScroll = wrapper.offsetHeight - window.innerHeight
    const target = (sectionIdx / 4) * totalScroll + wrapper.offsetTop
    window.scrollTo({ top: target, behavior: 'smooth' })
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 glass-panel px-6 py-4 flex justify-between items-center transition-all duration-300 rounded-2xl${scrolled ? ' scrolled-nav' : ''}`}
        >
            {/* Logo */}
            <div className="font-heading text-2xl font-extrabold tracking-tight">
                <a
                    href="#home"
                    onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                >
                    Abhishek.
                </a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map(link => (
                    <li key={link.label}>
                        {link.sectionIdx !== undefined ? (
                            <button
                                onClick={() => scrollToExperienceSection(link.sectionIdx)}
                                className="nav-link text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group bg-transparent border-none cursor-pointer"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                            </button>
                        ) : link.label === 'Contact' ? (
                            <a
                                href={link.href}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all"
                            >
                                Hire Me
                            </a>
                        ) : (
                            <a href={link.href} className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile hamburger */}
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setMenuOpen(m => !m)}
                aria-label="Toggle menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {menuOpen
                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    }
                </svg>
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 glass-panel px-6 py-5 rounded-2xl flex flex-col gap-4 md:hidden">
                    {NAV_LINKS.map(link => (
                        <div key={link.label}>
                            {link.sectionIdx !== undefined ? (
                                <button
                                    onClick={() => { scrollToExperienceSection(link.sectionIdx); setMenuOpen(false) }}
                                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer w-full text-left"
                                >
                                    {link.label}
                                </button>
                            ) : link.label === 'Contact' ? (
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-5 py-2 rounded-full text-sm font-bold"
                                >
                                    Hire Me
                                </a>
                            ) : (
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
