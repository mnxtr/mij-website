import { motion } from 'motion/react';

interface LoadingPageProps {
  message?: string;
  fullScreen?: boolean;
}

export default function LoadingPage({ 
  message = 'Loading...', 
  fullScreen = true 
}: LoadingPageProps) {
  const containerClass = fullScreen 
    ? 'fixed inset-0 z-50 bg-white' 
    : 'w-full py-20';

  return (
    <div className={`${containerClass} flex items-center justify-center`}>
      <div className="text-center">
        {/* Animated Logo / Brand Mark */}
        <motion.div
          className="relative w-24 h-24 mx-auto mb-8"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-4 border-primary/20 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Middle Ring */}
          <motion.div
            className="absolute inset-2 border-4 border-secondary/30 rounded-full"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Inner Circle with Gradient */}
          <motion.div
            className="absolute inset-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-white font-bold text-xl">MIJ</span>
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{message}</h2>
          <div className="flex items-center justify-center gap-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-64 h-1 bg-gray-100 rounded-full overflow-hidden mt-8 mx-auto"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

// Alternative Loading Spinner Component (Smaller, for inline use)
export function LoadingSpinner({ 
  size = 'md', 
  className = '' 
}: { 
  size?: 'sm' | 'md' | 'lg'; 
  className?: string;
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} border-3 border-primary border-t-transparent rounded-full ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

// Alternative Skeleton Loading Component
export function SkeletonLoader({ 
  type = 'text',
  count = 1,
  className = '',
}: {
  type?: 'text' | 'card' | 'image' | 'circle';
  count?: number;
  className?: string;
}) {
  const baseClass = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse';
  
  const typeClasses = {
    text: 'h-4 rounded',
    card: 'h-48 rounded-2xl',
    image: 'h-64 rounded-lg',
    circle: 'w-12 h-12 rounded-full',
  };

  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={`${baseClass} ${typeClasses[type]} mb-4`} />
      ))}
    </div>
  );
}
