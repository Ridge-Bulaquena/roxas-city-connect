import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // You could add logging here if you want to track 404 errors
    // console.log(`404 - Not Found: ${location.pathname}`);
  }, [location]);

  return (
    <Layout>
        <div className="min-h-[70vh] flex items-center justify-center text-center px-4" style={{
            backgroundImage: 'radial-gradient(circle at top left, #e6ecf2, #eef2f9 70%)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-8xl font-bold text-slate-400">404</h1>
                <h2 className="mt-4 text-3xl font-light text-slate-800">Page Not Found</h2>
                <p className="mt-2 text-lg text-slate-500">
                    Sorry, the page you are looking for does not exist.
                </p>
                <p className="mt-1 text-sm text-slate-400">
                    You tried to access: <code>{location.pathname}</code>
                </p>
                <Link to="/">
                    <motion.button 
                        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Go Back Home
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    </Layout>
  );
};

export default NotFound;
