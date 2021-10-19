import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import styles from './ProjectBox.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton'

export default function ProjectBox({ imgUrl, title, description, gitHref, demoHref }) {
    return <Box className={styles.projectBox}>
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
                <Button
                    size='large'
                    variant='contained'
                    sx={{ marginRight: '16px', backgroundColor: '#1B2021 !important' }}
                    href={demoHref}
                >
                    SHOW PROJECT
                </Button>
                <IconButton href={gitHref}>
                    <GitHubIcon sx={{ color: '#fff', fontSize: '60px' }} />
                </IconButton>
            </Grid>
        </Grid>
        <img
            src={imgUrl}
            className={styles.img}
        />
    </Box>
}