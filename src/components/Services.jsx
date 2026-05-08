import { motion } from 'framer-motion';

export default function Services() {
    const services = [
        {
            name: 'Web Design',
            icon: './assets/web-icon.png',
            description: 'Creating visually appealing, user-friendly website layouts using HTML, CSS, and design principles for great user experience.',
            link: '#',
        },
        {
            name: 'React Developer',
            icon: './assets/mobile-icon.png',
            description: 'Building fast, interactive user interfaces using React, components, hooks, and modern JavaScript tools.',
            link: '#',
        },
        {
            name: 'Backend Developer',
            icon: './assets/ui-icon.png',
            description: 'Developing server-side logic, databases, and APIs to ensure secure and efficient application functionality.',
            link: '#',
        },
        {
            name: 'Full Stack Developer',
            icon: './assets/graphics-icon.png',
            description: 'Handling both frontend and backend development to build complete, scalable web applications end-to-end.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <motion.h4 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                What i offer
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-5xl font-Ovo"
            >
                My services
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
            >
                Full Stack Developer at We Touch Technologies with 2 years of experience in building scalable web applications.
            </motion.p>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.5
                        }
                    }
                }}
                className="grid grid-cols-auto gap-6 my-10"
            >
                {services.map((service) => (
                    <motion.div 
                        key={service.name} 
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer bg-white dark:bg-transparent duration-300 dark:hover:bg-darkHover dark:hover:shadow-white"
                    >
                        <motion.img 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            src={service.icon} 
                            alt="" 
                            className="w-10" 
                        />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}