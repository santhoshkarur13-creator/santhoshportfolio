import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projectsData } from '../assets/projectsData';
import { motion } from 'framer-motion';

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);
    const iconUrl = project ? project.icon.replace('./', import.meta.env.BASE_URL) : '';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center dark:bg-darkTheme dark:text-white">
                <h1 className="text-4xl font-Ovo mb-4">Project Not Found</h1>
                <Link to="/" className="px-6 py-3 border border-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-darkHover transition">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen dark:text-white pb-20 relative z-10"
        >
            {/* Simple Navbar for Project Page */}
            <motion.nav 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white/70 dark:bg-darkTheme/70 backdrop-blur-md shadow-sm sticky top-0"
            >
                <Link to="/">
                    <motion.h1 
                        whileHover={{ scale: 1.05, x: -5 }}
                        className='text-2xl sm:text-3xl font-Ovo flex items-center gap-2 transition-colors hover:text-gray-600 dark:hover:text-gray-300'
                    >
                        <span className="text-gray-500">&larr;</span> Back
                    </motion.h1>
                </Link>
            </motion.nav>

            <div className="max-w-5xl mx-auto px-5 lg:px-8 pt-10">
                <motion.div 
                    initial={{ y: 40, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-[40vh] sm:h-[60vh] bg-cover bg-center rounded-2xl shadow-md relative mb-12 overflow-hidden group"
                    style={{ backgroundImage: `url(${iconUrl})` }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-2xl group-hover:bg-black/50 transition-colors duration-500"></div>
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute bottom-10 left-10 right-10"
                    >
                        <h1 className="text-4xl sm:text-6xl font-bold text-white font-Ovo drop-shadow-lg">
                            {project.name}
                        </h1>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 flex flex-col gap-8">
                        <motion.section
                            initial={{ x: -40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-Ovo mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Overview</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </motion.section>

                        <motion.section
                            initial={{ x: -40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="text-3xl font-Ovo mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Key Features</h2>
                            <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700 dark:text-gray-300">
                                {project.features.map((feature, idx) => (
                                    <motion.li 
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                                    >
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.section>
                    </div>

                    <div className="flex flex-col gap-8">
                        <motion.div 
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white dark:bg-darkHover p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
                        >
                            <h3 className="text-xl font-bold mb-4 font-Ovo">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <motion.span 
                                        key={idx} 
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.3 + (idx * 0.1) }}
                                        className="px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium cursor-default border border-gray-200 dark:border-white/10"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {project.link && (
                            <motion.a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="w-full py-4 bg-black text-white dark:bg-white dark:text-black rounded-xl text-center font-bold text-lg transition-colors shadow-md flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200"
                            >
                                Visit Live Website
                                <motion.span 
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    &#8599;
                                </motion.span>
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
