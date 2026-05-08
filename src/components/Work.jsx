import { Link } from 'react-router-dom';
import { projectsData } from '../assets/projectsData';
import { motion } from 'framer-motion';

export default function Work() {
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-auto my-10 gap-5 dark:text-black"
            >
                {projectsData.map((project, index) => {
                    const iconUrl = project.icon.replace('./', import.meta.env.BASE_URL);
                    return (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={project.id}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <Link to={`/project/${project.id}`} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group block shadow-md hover:shadow-xl transition-shadow duration-300" style={{ backgroundImage: `url(${iconUrl})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div className="flex-1 overflow-hidden pr-2">
                                <h2 className="font-semibold truncate">{project.name}</h2>
                                <p className="text-sm text-gray-700 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden group-hover:mt-1">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 shrink-0 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="./assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </Link>
                    </motion.div>
                    );
                })}
            </motion.div>

        </div>
    )
}