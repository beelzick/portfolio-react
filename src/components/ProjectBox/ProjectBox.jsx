import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import styles from './ProjectBox.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton'

export default function ProjectBox({ title }) {
    return <Box className={styles.projectBox}>
        <Grid
            container
            direction='column'
            className={styles.imgContainerContent}
            justifyContent='center'
            alignItems='center'
        >
            <Typography variant='h5' component='h4' align='center'>
                Title
            </Typography>
            <Typography variant='body2' component='p' align='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Grid container justifyContent='center' alignItems='center' mt={2}>
                <Button
                    size='large'
                    variant='contained'
                    sx={{ marginRight: '16px', backgroundColor: '#1B2021 !important' }}
                >
                    SHOW PROJECT
                </Button>
                <IconButton>
                    <GitHubIcon sx={{ color: '#fff', fontSize: '60px' }} />
                </IconButton>
            </Grid>
        </Grid>
        <img
            src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1000/v1634402034/portfolio/example.webp'
            className={styles.img}
        />
    </Box>
}