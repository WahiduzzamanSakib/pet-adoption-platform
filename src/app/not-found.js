"use client";

import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300 relative overflow-hidden">

     
      <div className="absolute w-120 h-120 bg-red-400/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-100 h-100 bg-blue-400/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
     
        <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-white/20 dark:border-slate-700 rounded-3xl shadow-2xl p-10 text-center">

          {/* icon */}
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10 text-red-500"
          >
            <FiAlertTriangle size={34} />
          </motion.div>

      
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-800 dark:text-white">
            404
          </h1>

          
          <h2 className="mt-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
            Page Not Found
          </h2>

         
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            The page you’re looking for doesn’t exist, has been moved, or is temporarily unavailable.
          </p>

         
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="mt-8 w-full py-3 rounded-xl font-medium text-white
            bg-gradient-to-r from-red-500 to-pink-500
            hover:from-red-600 hover:to-pink-600
            shadow-lg shadow-red-500/20 transition-all"
          >
            Back to Home
          </motion.button>

         
          <button
            onClick={() => router.back()}
            className="mt-4 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition"
          >
            Go back
          </button>
        </div>
      </motion.div>
    </div>
  );
}