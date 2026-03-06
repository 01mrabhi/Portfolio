const Contact = () => {
    return (
        <section
            id="contact"
            className="section py-20 pb-32"
            style={{ background: '#0f172a', scrollMarginTop: '90px' }}
        >
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                {/* Two-column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="glass-panel p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6 text-white text-center lg:text-left">Let's Connect</h3>
                        <p className="text-lg text-slate-300 mb-8 text-center lg:text-left">
                            Feel free to reach out to me via email or connect on LinkedIn and GitHub.
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="flex flex-col gap-6">
                            {/* Email */}
                            <a href="mailto:your.email@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-400 font-semibold mb-1">Email</h4>
                                    <p className="text-lg text-white font-medium">your.email@gmail.com</p>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-400 font-semibold mb-1">LinkedIn</h4>
                                    <p className="text-lg text-white font-medium">Let's Connect</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-panel p-8 md:p-10">
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm text-slate-300 font-medium">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm text-slate-300 font-medium">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm text-slate-300 font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="How can I help you?"
                                    className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-blue-500/50 transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
