import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="flex justify-center items-center flex-col h-full gap-12">
            <h1 className="text-white text-4xl text-center">Welcome To My Mini Book Library</h1>
            <Link to="/genre">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 5px rgb(255, 255, 255)",
                        boxShadow: "0px 0px 5px rgb(255, 255, 255)"
                    }}
                    className="bg-transparent text-neutral-200 text-2xl border rounded-full px-4 py-2">Get A Book Recommendation</motion.button>
            </Link>
        </motion.main>
    );
}

export default Home;