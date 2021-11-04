import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useState, useEffect, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer';

interface Props {
    children: ReactNode
}

export default function TypographySlide({ children, ...rest }: Props) {
    const [visible, setVisible] = useState(false)
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            setVisible(true)
        }
    }, [inView])

    return (
        <Typography
            component={motion.h3}
            initial={{ opacity: 0, x: -100 }}
            animate={visible && { opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            ref={ref}
            {...rest}
        >
            {children}
        </Typography>
    )
}
