import { bookData } from "../data";
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
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
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
const Book = ({ book }) => {

    const recommendedBook = bookData.find((data) => data.genre === book.genre && data.trope === book.trope)

    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex mt-40 flex-col h-full gap-8">
            <h2 className="text-white text-2xl font-bold text-center">Thank you for your participation :) </h2>
            <motion.p variants={childVariants} className="text-center text-neutral-100 text-lg ">Based on your selections, your book recommendation is: </motion.p>
            {recommendedBook &&
                <>
                    <motion.p variants={childVariants} className="text-center text-2xl text-white font-serif font-extrabold">{recommendedBook.title} <span className="text-lg text-neutral-100 font-mono font-medium">By {recommendedBook.author}</span></motion.p>
                    <motion.a
                        variants={btnVariants}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 5px rgb(255, 255, 255)",
                            boxShadow: "0px 0px 5px rgb(255, 255, 255)"
                        }}
                        href={`https://zlibrary.org/s/${recommendedBook.title}`} target="_blank" className="btn text-center">Click Here To Go To A Download Link</motion.a>
                </>}
        </motion.main>
    );
}

export default Book;