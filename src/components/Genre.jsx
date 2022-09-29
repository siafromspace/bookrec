import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            delay: 0.5
        }
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut"
        }
    }
}

const btnVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120
        }
    }
}
const Genre = ({ addGenre, book }) => {
    const genres = ["Fantasy", "Science Fiction", "Romance"]
    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="main">
            <h2 className="heading-two">Step 1: Choose Your Favorite Genre</h2>
            <ul>
                {genres.map((genre, i) => {
                    let style = book.genre === genre ? "clicked" : ""
                    let span = book.genre === genre ? "span" : "hidden"
                    return <motion.li
                        whileHover={{ scale: 1.3, color: '#39ff14', originX: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        key={i}
                        className={`list-item ${style}`}
                        onClick={() => addGenre(genre)}>
                        <span className={span}>&gt; </span> {genre}</motion.li>
                })}
            </ul>
            {book.genre && <Link to="/trope">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 5px rgb(255, 255, 255)",
                        boxShadow: "0px 0px 5px rgb(255, 255, 255)",
                        transition: {
                            duration: 0.3,
                            repeat: Infinity,
                            ease: "easeIn",
                            repeatType: "reverse"
                        }
                    }}
                    whileTap={{ scale: 0.9 }}
                    variants={btnVariants}
                    className="btn">Next</motion.button>
            </Link>}
        </motion.main>
    );
}

export default Genre;