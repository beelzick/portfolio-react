import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { MdTravelExplore } from 'react-icons/md'
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