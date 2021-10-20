import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../useOnScreen'

export default function TypographySlide({ component, ...rest }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])

    return <Typography component={motion[component]}
        initial={{ opacity: 0, x: -100 }}
        animate={visible && { opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        ref={ref}
        {...rest}
    >
    </Typography>
}
