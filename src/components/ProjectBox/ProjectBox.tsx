import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import styles from './ProjectBox.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton'
import { motion } from 'framer-motion'

interface Props {
    imgUrl: string
    title: string
    description: string
    i: number
    gitHref?: string
    demoHref?: string
}

const variants = {
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            delay: i * 0.3,
            duration: 0.3
        }
    }),
    hidden: { opacity: 0 }
}

export default function ProjectBox({ imgUrl, title, description, gitHref, demoHref, i }: Props) {
    return <Box
        className={styles.projectBox}
        component={motion.div}
        initial='hidden'
        animate='visible'
        variants={variants}
        custom={i + 1}>
        <Grid
            container
            direction='column'
            className={styles.imgContainerContent}
            justifyContent='center'
            alignItems='center'
        >
            <Typography variant='h5' component='h4' align='center'>
                {title}
            </Typography>
            <Typography variant='body2' component='p' align='center' sx={{ width: '80%' }}>
                {description}
            </Typography>
            <Grid container justifyContent='center' alignItems='center' mt={2}>
                {demoHref && (
                    <Button
                        size='large'
                        variant='contained'
                        sx={{ marginRight: '16px', backgroundColor: '#1B2021 !important' }}
                        href={demoHref}
                    >
                        SHOW PROJECT
                    </Button>
                )}
                {gitHref && (
                    <IconButton href={gitHref}>
                        <GitHubIcon sx={{ color: '#fff', fontSize: '60px' }} />
                    </IconButton>)
                }
            </Grid>
        </Grid>
        <img
            src={imgUrl}
            className={styles.img}
            alt={title}
        />
    </Box>
}