import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);
        
        // Use your Web3Forms Access Key
        formData.append("access_key", "7883735b-da1f-4f1e-a099-202d5f772e58");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset(); 
            } else {
                setResult(data.message || "An error occurred.");
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            id="contact" 
            className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
        >
            
            <motion.h4 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                Connect with me
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-5xl font-Ovo"
            >
                Get in touch
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
            >
                I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </motion.p>

            <motion.form 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onSubmit={onSubmit} 
                className="max-w-2xl mx-auto"
            >
                {/* Hidden field for email subject line */}
                <input type="hidden" name="subject" value="New Portfolio Submission" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                    <motion.input 
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        type="text" 
                        name="name"
                        placeholder="Enter your name" 
                        className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" 
                        required 
                    />

                    <motion.input 
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        type="email" 
                        name="email"
                        placeholder="Enter your email" 
                        className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" 
                        required 
                    />
                </div>

                <motion.textarea 
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    name="message"
                    rows="6" 
                    placeholder="Enter your message" 
                    className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30" 
                    required
                ></motion.textarea>

                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type='submit' 
                    className="py-3 px-10 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/90 duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
                >
                    Submit now
                    <motion.img 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        src="./assets/right-arrow-white.png" 
                        alt="" 
                        className="w-4" 
                    />
                </motion.button>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: result ? 1 : 0 }}
                    className={`mt-4 text-center font-semibold ${result.includes("successfully") ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}
                >
                    {result}
                </motion.p>
            </motion.form>
        </motion.div>
    );
}