import { motion } from 'framer-motion'

export default function Separator ({animated}) {
    if (animated) {
      return (
        <motion.div
        className="flex items-center justify-center py-6 bg-gray-800"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          >
          <motion.div
            className="h-0.5 bg-red-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            />
          <motion.div
            className="mx-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
            <motion.div
              className="w-6 h-6 bg-gray-800 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              />
          </motion.div>
          <motion.div
            className="h-0.5 bg-red-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

      )
    }

    return (
      <div className="flex items-center justify-center py-6 bg-gray-800">
        <div className="h-0.5 bg-red-600 rounded-full w-1/3"></div>
        <div className="mx-4 w-5 h-5 md:h-6 md:w-6 bg-red-600 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 md:h-4 md:w-4 bg-gray-800 rounded-full"></div>
        </div>
        <div className="h-0.5 bg-red-600 rounded-full w-1/3"></div>
      </div>
    )
    
  }