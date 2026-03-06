import { projects } from '../data/projects'
import './Projects.css'

// Tech icon mapping (emoji fallback since no icon lib required)
const TECH_ICONS = {
    'React': { bg: '#20232a', label: 'Re' },
    'Node.js': { bg: '#3c873a', label: 'No' },
    'Express': { bg: '#353535', label: 'Ex' },
    'MongoDB': { bg: '#116149', label: 'Mg' },
    'Redux': { bg: '#764abc', label: 'Rx' },
    'Firebase': { bg: '#f5820d', label: 'Fb' },
    'Tailwind CSS': { bg: '#0ea5e9', label: 'Tw' },
    'Framer Motion': { bg: '#e11d48', label: 'Fr' },
    'HTML': { bg: '#e34c26', label: 'Ht' },
    'CSS': { bg: '#264de4', label: 'Cs' },
    'JavaScript': { bg: '#f0db4f', label: 'JS' },
    'TypeScript': { bg: '#3178c6', label: 'TS' },
    'Next.js': { bg: '#000000', label: 'Nx' },
}

const TechBadge = ({ tech, offset }) => {
    const icon = TECH_ICONS[tech] || { bg: '#334155', label: tech.slice(0, 2) }
    return (
        <div
            className="tech-badge"
            style={{ background: icon.bg, left: `${offset * 22}px` }}
            title={tech}
        >
            {icon.label}
        </div>
    )
}

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0
    return (
        <div className={`project-card ${isEven ? 'card-left' : 'card-right'}`}>
            {/* Screenshot */}
            <div className="project-img-wrap">
                <div className="project-img-inner">
                    <img src={project.image} alt={project.title} className="project-img" />
                    <div className="project-img-overlay" />
                </div>
            </div>

            {/* Content */}
            <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-footer">
                    {/* Tech icon badges */}
                    <div className="tech-badges-wrap">
                        {project.technologies.slice(0, 5).map((tech, i) => (
                            <TechBadge key={tech} tech={tech} offset={i} />
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="project-ctas">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-ghost"
                            title="GitHub"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-live"
                        >
                            Check Live Site <span className="cta-arrow">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                {/* Section header */}
                <div className="section-header">
                    <p className="section-eyebrow">A small selection of</p>
                    <h2 className="section-title">
                        My Recent <span className="gradient-text">Projects</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
