import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSlideIndex } from '../../redux/slideIndexSlice'
import slideTexts from '../../helpers/slideTexts'
import { motion, AnimatePresence } from "framer-motion"
export default function SlideText() {
    const [slideText, setSlideText] = useState('code')
    const slideIndex = useSelector(selectSlideIndex)

    useEffect(() => {
        if (slideIndex === 6) {
            setSlideText(slideTexts[0])
        } else {
            setSlideText(slideTexts[slideIndex - 1])
        }
    }, [slideIndex])

    return (
        <AnimatePresence>
            <Typography
                key={slideIndex}
                variant='body1'
                align='center'
                sx={{
                    width: { xs: '100%', sm: '80%', md: '60%', lg: '50%', xl: '40%' },
                    height: { xs: '230px', sm: '250px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                component={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {slideText}
            </Typography>
        </AnimatePresence >
    )
}