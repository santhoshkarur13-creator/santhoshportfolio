import { motion } from 'framer-motion';

export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <motion.img 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                src="./assets/profile-img.png" 
                alt="" 
                className="rounded-full w-32" 
            />
            
            <motion.h3 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
            >
                Hi! I&apos;m Santhosh
                <motion.img 
                    animate={{ rotate: [0, 20, -10, 20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    src="./assets/hand-icon.png" 
                    alt="" 
                    className="w-6 mb-1 origin-bottom-right" 
                />
            </motion.h3>
            
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
            >
                Full-Stack Developer
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-2xl mx-auto font-Ovo"
            >
                Full Stack Developer at We Touch Technologies with 2 years of experience in building scalable web applications.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-4"
            >
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
                >
                    contact me 
                    <motion.img 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        src="./assets/right-arrow-white.png" 
                        alt="" 
                        className="w-4" 
                    />
                </motion.a>

                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
                >
                    my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </motion.a>
            </motion.div>
        </div>
    )
}