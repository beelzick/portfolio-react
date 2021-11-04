import Grid from '@mui/material/Grid'
import CSSBaseline from '@mui/material/CssBaseline'
import Loader from 'react-loader-spinner';
import Typography from '@mui/material/Typography';

export default function LoadingPage() {
    return (
        <>
            <CSSBaseline />
            <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ height: '100vh', backgroundColor: '#1B2021' }}>
                <Loader
                    type='Puff'
                    color='#16db65'
                    height={350}
                    width={350}
                    timeout={10000}
                />
                <Typography mt={3} component='span' align='center' variant='h4' color='#16db65'>
                    Loading...
                </Typography>
            </Grid>
        </>
    )
}