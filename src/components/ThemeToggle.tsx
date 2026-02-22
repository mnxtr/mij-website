import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'motion/react';
import Magnetic from './animations/Magnetic';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Magnetic>
            <motion.button
                onClick={toggleTheme}
                className="relative p-2.5 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 text-gray-950 dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 shadow-sm overflow-hidden group"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                title={theme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-5 h-5 flex items-center justify-center">
                    <motion.div
                        initial={false}
                        animate={{
                            rotate: theme === 'light' ? 0 : 90,
                            scale: theme === 'light' ? 1 : 0,
                            opacity: theme === 'light' ? 1 : 0
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="absolute"
                    >
                        <Sun className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
                    </motion.div>
                    <motion.div
                        initial={false}
                        animate={{
                            rotate: theme === 'dark' ? 0 : -90,
                            scale: theme === 'dark' ? 1 : 0,
                            opacity: theme === 'dark' ? 1 : 0
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="absolute"
                    >
                        <Moon className="w-5 h-5 text-blue-400" strokeWidth={2.5} />
                    </motion.div>
                </div>
            </motion.button>
        </Magnetic>
    );
}
