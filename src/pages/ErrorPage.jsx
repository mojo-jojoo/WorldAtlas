import { useRouteError, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ErrorPage.css";

export const Errorpage = () => {
  const error = useRouteError();
  console.error(error);

  // Determine error type and message
  let errorTitle = "Oops! Something went wrong";
  let errorMessage = "We're sorry for the inconvenience. Please try again later.";
  let errorCode = error.status || "Unknown";

  if (error.status === 404) {
    errorTitle = "Page Not Found";
    errorMessage = "The page you're looking for doesn't exist or has been moved.";
    errorCode = "404";
  } else if (error.status === 500) {
    errorTitle = "Server Error";
    errorMessage = "Our servers are experiencing some issues. Please try again later.";
    errorCode = "500";
  } else if (error.status === 403) {
    errorTitle = "Access Denied";
    errorMessage = "You don't have permission to access this resource.";
    errorCode = "403";
  }

  return (
    <div className="error-container">
      {/* Animated background elements */}
      <div className="error-background">
        <div className="bg-bubble bubble-1"></div>
        <div className="bg-bubble bubble-2"></div>
        <div className="bg-bubble bubble-3"></div>
        <div className="bg-bubble bubble-4"></div>
      </div>

      <motion.div 
        className="error-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Error code with animation */}
        <motion.div 
          className="error-code"
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          {errorCode}
        </motion.div>

        {/* Error title */}
        <motion.h1 
          className="error-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {errorTitle}
        </motion.h1>

        {/* Error message */}
        <motion.p 
          className="error-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {errorMessage}
        </motion.p>

        {/* Action buttons */}
        <motion.div 
          className="error-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Go Home
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </motion.button>
        </motion.div>

        {/* Technical details (collapsible) */}
        <motion.div 
          className="error-details"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <details>
            <summary>Technical Details</summary>
            <p>{error.statusText || error.message}</p>
          </details>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        className="error-illustration"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="astronaut">
          <div className="helmet"></div>
          <div className="body"></div>
        </div>
        <div className="planet"></div>
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </motion.div>
    </div>
  );
};

