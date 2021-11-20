import Grid from '@mui/material/Grid'
import { ComponentType } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SwiperContent({ Icon }: any) {
    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Icon fontSize='200px' color='#16db65' />
        </Grid>
    )
}