import Model from './Model'

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-glow-1"></div>
            <div className="hero-glow-2"></div>

            <div className="container hero-container relative z-10 flex flex-col md:flex-row items-center justify-between w-full min-h-screen">
                <div className="hero-content flex-1 text-center md:text-left z-20 md:pr-8 mt-24 md:mt-0">
                    <p className="hero-subtitle mb-4 text-blue-500 font-semibold tracking-widest uppercase">Hello, I'm Abhishek 👋</p>
                    <h1 className="hero-title text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Crafting <span className="gradient-text glass-text">Digital</span>
                        <br /> Experiences
                    </h1>
                    <p className="hero-description text-xl text-slate-400 mb-8 max-w-lg">
                        A passionate developer building modern, aesthetic, and highly
                        performant web applications using the MERN stack and modern
                        JavaScript technologies.
                    </p>
                    <div className="hero-actions flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:-translate-y-1 hover:shadow-blue-500/50 transition-all text-center">View My Work</a>
                        <a href="#about" className="glass-panel text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all text-center border border-white/20">About Me</a>
                    </div>
                </div>

                <div className="flex-1 w-full h-[500px] md:h-screen relative z-10">
                    <Model />
                </div>
            </div>
        </section>
    )
}

export default Hero
