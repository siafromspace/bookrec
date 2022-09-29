import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const btnVariant = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 5px rgb(255, 255, 255)",
        boxShadow: "0px 0px 5px rgb(255, 255, 255)",
        transition: {
            duration: 0.3,
            repeat: Infinity,
            ease: "easeIn",
            repeatType: "reverse"
        }
    },
    tap: {
        scale: 0.9
    }
}
const containerVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 1, duration: 1.5 }
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut"
        }
    }
}

const Home = () => {
    return (
        <motion.main
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex justify-center items-center flex-col h-full gap-12">
            <h1 className="text-white text-4xl text-center">Welcome To My Mini Book Library</h1>
            <Link to="/genre">
                <motion.button
                    variants={btnVariant}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-transparent text-neutral-200 text-2xl border rounded-full px-4 py-2">Get A Book Recommendation</motion.button>
            </Link>
        </motion.main>
    );
}

export default Home;