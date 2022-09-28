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

const Trope = ({ addTrope, book }) => {
    const tropes = ["Found Family", "Enemies To Lovers", "Redemption"]
    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="main">
            <h2 className="heading-two">Step 2: Choose Your Favorite Trope</h2>
            <ul>
                {tropes.map((trope, i) => {
                    let style = book.trope === trope ? "clicked" : ""
                    let span = book.trope === trope ? "span" : "hidden"
                    return <motion.li
                        whileHover={{ scale: 1.3, color: '#39ff14', originX: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        key={i}
                        className={`list-item ${style}`}
                        onClick={() => addTrope(trope)}>
                        <span className={span}>&gt; </span> {trope}</motion.li>
                })}
            </ul>
            {book.trope && <Link to="/book">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 5px rgb(255, 255, 255)",
                        boxShadow: "0px 0px 5px rgb(255, 255, 255)"
                    }}
                    variants={btnVariants}
                    className="btn">Get Book</motion.button>
            </Link>}
        </motion.main>
    );
}

export default Trope;