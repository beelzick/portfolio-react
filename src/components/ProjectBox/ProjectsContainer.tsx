import { ReactNode, useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { useInView } from 'react-intersection-observer';

interface Props {
    children: ReactNode
}

export default function ProjectsContainer({ children }: Props) {
    const [visible, setVisible] = useState(false)
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            setVisible(true)
        }
    }, [inView])

    return <Grid
        container
        justifyContent='center'
        alignItems='center'
        ref={ref}
    >
        {visible && children}
    </Grid>
}

