import { motion } from 'framer-motion'
import { useState, useEffect, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer';

interface Props {
    children: ReactNode
}

export default function MotionDiv({ children, ...rest }: Props) {
    const [visible, setVisible] = useState(false)
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            setVisible(true)
        }
    }, [inView])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={visible && { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            ref={ref}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}
            {...rest}
        >
            {children}
        </motion.div>
    )
}
