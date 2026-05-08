import { motion } from 'framer-motion';

export default function About() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Jquery",
        "React.js",
        "Redux",
        "Bootstrap",
        "Material UI",
        "uiverse.io",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Java(core)","Express.js", "Django", "REST APIs"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "Mongodb Atlas", "MySQL"],
    },
  ];

  const tools = [
    { name: "VS Code", icon: "./assets/vscode.png" },
    { name: "Firebase", icon: "./assets/firebase.png" },
    { name: "MongoDB Compass", icon: "./assets/mongodb.png" },
    { name: "Postman", icon: "./assets/postman.png" },
    { name: "Git", icon: "./assets/git.png" },
    { name: "GitHub", icon: "./assets/github.png" },
  ];

  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20">
      {/* Heading */}
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-Ovo mb-16"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-start gap-16">
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto lg:mx-0"
        >
          <img
            src="./assets/user-image.png"
            alt="user"
            className="w-72 sm:w-80 rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          {/* About Text */}
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-2xl text-gray-600 dark:text-white/80"
          >
            I am a Full Stack Developer with 2 years of experience building
            scalable and user-friendly web applications. I specialize in both
            frontend and backend technologies and enjoy creating complete
            end-to-end solutions.
          </motion.p>

          {/* Skills */}
          <motion.h3 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-semibold mb-8"
          >
            Technical Skills
          </motion.h3>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-10">
            {skillCategories.map(({ title, skills }, index) => (
              <motion.div 
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-4">{title}</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-5 font-semibold text-gray-700 dark:text-white/80"
          >
            Tools & Software
          </motion.h4>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.7
                    }
                }
            }}
            className="flex flex-wrap gap-5"
          >
            {tools.map(({ name, icon }) => (
              <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -5, scale: 1.1 }}
                key={name}
                className="w-14 h-14 flex items-center justify-center rounded-lg border border-gray-300 dark:border-white/30 transition-transform duration-300 cursor-pointer bg-white/10"
                title={name}
              >
                <img src={icon} alt={name} className="w-7" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}