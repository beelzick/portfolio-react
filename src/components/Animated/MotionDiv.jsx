import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../useOnScreen'

export default function MotionDiv({ children, ...rest }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])

    return <motion.div
        initial={{ opacity: 0 }}
        animate={visible && { opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        ref={ref}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}
        {...rest}
    >
        {children}
    </motion.div>
}
