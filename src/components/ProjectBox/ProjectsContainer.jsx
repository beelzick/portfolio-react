import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../useOnScreen'
import Grid from '@mui/material/Grid'

export default function ProjectsContainer({ children }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])

    return <Grid
        container
        justifyContent='center'
        alingItems='center'
        ref={ref}
    >
        {visible && children}
    </Grid>
}

