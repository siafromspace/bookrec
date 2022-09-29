import { motion } from "framer-motion";

const svgVariants = {
    hidden: {
        rotate: -360
    },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 5,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

const Header = () => {
    return (
        <header className="w-full flex items-end gap-6 flex-grow">
            <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                    fill="#FFFFFF" stroke="none">
                    <motion.path variants={pathVariants} d="M240 480 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
-10 -9 -10 -20z"/>
                    <motion.path variants={pathVariants} d="M132 468 c3 -7 15 -43 27 -81 13 -37 26 -65 31 -62 11 7 -39 155 -52
155 -6 0 -8 -6 -6 -12z"/>
                    <motion.path variants={pathVariants} d="M327 405 c-14 -41 -22 -77 -17 -80 5 -3 18 25 31 62 12 38 24 74 27
81 2 6 0 12 -6 12 -6 0 -22 -34 -35 -75z"/>
                    <motion.path variants={pathVariants} d="M34 457 c-17 -19 11 -43 29 -25 11 10 12 15 1 25 -15 16 -16 16 -30
0z"/>
                    <motion.path variants={pathVariants} d="M434 457 c-17 -19 11 -43 29 -25 11 10 12 15 1 25 -15 16 -16 16 -30
0z"/>
                    <motion.path variants={pathVariants} d="M233 415 c-19 -21 13 -44 32 -24 13 13 12 16 -3 25 -13 8 -20 8 -29
-1z"/>
                    <motion.path variants={pathVariants} d="M71 400 c0 -20 45 -75 52 -63 4 5 -7 25 -23 44 -18 20 -29 28 -29 19z" />
                    <motion.path variants={pathVariants} d="M396 378 c-31 -40 -22 -61 10 -22 21 26 31 54 20 54 -3 0 -16 -14
-30 -32z"/>
                    <motion.path variants={pathVariants} d="M240 330 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
-10 -9 -10 -20z"/>
                    <motion.path variants={pathVariants} d="M80 296 c0 -7 -9 -16 -20 -19 -20 -5 -20 -12 -18 -124 l3 -118 90 -7
c111 -10 119 -10 230 0 l90 7 3 118 c2 112 2 119 -18 124 -11 3 -20 12 -20 19
0 18 -81 18 -133 0 -31 -11 -43 -11 -75 0 -51 18 -132 18 -132 0z m116 -17
l44 -11 0 -90 0 -91 -37 7 c-21 3 -53 6 -70 6 l-33 0 0 95 0 95 26 0 c14 0 45
-5 70 -11z m204 -84 l0 -95 -32 0 c-18 0 -50 -3 -70 -6 l-38 -7 0 91 0 90 38
10 c20 5 52 10 70 11 l32 1 0 -95z m-320 -24 l0 -88 73 -7 c90 -9 104 -9 195
0 l72 7 0 88 c0 53 4 89 10 89 6 0 10 -42 10 -105 l0 -105 -75 0 c-43 0 -84
-5 -95 -12 -16 -10 -24 -10 -40 0 -11 7 -52 12 -95 12 l-75 0 0 105 c0 63 4
105 10 105 6 0 10 -36 10 -89z"/>
                </g>
            </motion.svg>
            <motion.p
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="text-white font-bold text-xl font-mono border-b border-white pb-2 w-full">Mini Book Library</motion.p>
        </header>
    );
}

export default Header;