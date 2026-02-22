import React, { ReactNode } from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component for catching and displaying errors in routes
 */
class ErrorBoundaryClass extends React.Component<
  ErrorBoundaryProps,
  ErrorState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorDisplay error={this.state.error} />;
    }

    return this.props.children;
  }
}

/**
 * Error display component for route errors
 */
function ErrorDisplay({ error }: { error: Error | null }) {
  const routeError = useRouteError();

  // Determine error details
  let statusCode = 500;
  let errorTitle = 'Something went wrong';
  let errorMessage = 'An unexpected error occurred. Please try again.';

  if (isRouteErrorResponse(routeError)) {
    statusCode = routeError.status;
    errorTitle = routeError.statusText || 'Error';

    if (statusCode === 404) {
      errorTitle = 'Page not found';
      errorMessage = "The page you're looking for doesn't exist.";
    } else if (statusCode === 500) {
      errorTitle = 'Server error';
      errorMessage = 'A server error occurred. Please try again later.';
    } else {
      errorMessage = routeError.data?.message || errorMessage;
    }
  } else if (error) {
    errorMessage = error.message;
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="max-w-md w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Error Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"></div>
            <div className="relative bg-red-50 dark:bg-red-900/20 rounded-full p-6 border border-red-200 dark:border-red-800">
              <svg
                className="w-12 h-12 text-red-600 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4v2m0 0v2m0-6v-2m0 0V7a2 2 0 012-2h2.5a2 2 0 011.96 1.515l2.307 9.694A2 2 0 0121.438 21H2.562a2 2 0 01-1.978-2.84l2.307-9.694A2 2 0 014.5 7H7a2 2 0 012-2h2z"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Error Content */}
        <motion.div
          className="text-center"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            {statusCode}
          </h1>
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
            {errorTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            {errorMessage}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="space-y-3"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <button
            onClick={() => window.location.href = '/'}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Go to Home
          </button>
          <button
            onClick={() => window.history.back()}
            className="w-full px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors duration-200"
          >
            Go Back
          </button>
        </motion.div>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && error && (
          <motion.div
            className="mt-8 pt-6 border-t border-slate-300 dark:border-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <details className="text-left">
              <summary className="cursor-pointer text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300">
                Error Details
              </summary>
              <pre className="mt-3 p-3 bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 overflow-auto rounded border border-slate-300 dark:border-slate-600">
                {error.message}
              </pre>
            </details>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export { ErrorBoundaryClass as ErrorBoundary, ErrorDisplay };
