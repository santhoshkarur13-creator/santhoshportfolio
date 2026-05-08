import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-gray-50 dark:bg-darkTheme pointer-events-none transition-colors duration-500">
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-full bg-purple-300/30 dark:bg-purple-900/20 blur-[80px]"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, -50, 100, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] min-w-[350px] min-h-[350px] rounded-full bg-blue-300/30 dark:bg-blue-900/20 blur-[100px]"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-10%] left-[40%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] rounded-full bg-pink-300/30 dark:bg-pink-900/20 blur-[120px]"
      />
      
      {/* Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}
