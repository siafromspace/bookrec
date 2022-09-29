import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

const modal = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence mode="wait">
            {showModal && (
                <motion.div
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
                    <motion.div
                        variants={modal}
                        className="max-w-md my-0 mx-auto py-10 px-2 bg-white rounded-xl text-center">
                        <p className="text-md text-neutral-600">Want to get another book recommendation ?</p>
                        <Link to="/">
                            <button className="bg-transparent text-[#444] text-xl border border-[#444] rounded-3xl px-6 py-1 mt-5">Go To Home Page</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;