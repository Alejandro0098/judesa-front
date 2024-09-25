import { motion } from "framer-motion"

export default function Loading() {
    return <>
          <motion.div
            className="flex flex-col items-center self-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-24 h-24 border-t-4 border-b-4 border-black rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.h2
              className="mt-8 text-3  xl font-bold text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Cargando...
            </motion.h2>
            <motion.div
              className="mt-4 w-64 h-2 bg-black rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="h-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
    </>
}