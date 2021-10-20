import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import 'swiper/css';
import 'swiper/css/navigation';

export default function SwiperContent({ Icon }) {
    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Box>
                <Icon fontSize='200px' color='#16db65' />
            </Box>
        </Grid>
    )
}