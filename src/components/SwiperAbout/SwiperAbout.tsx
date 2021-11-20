import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import SwiperContent from './SwiperContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiWeightLiftingUp } from 'react-icons/gi'
import { FaGraduationCap } from 'react-icons/fa'
import { SiAtom } from 'react-icons/si'
import { BsCodeSlash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { v4 as uuidv4 } from 'uuid';
import SpidermanSvg from './SpidermanSvg';
import { setSlideIndex } from '../../redux/slideIndexSlice';
export default function SwiperAbout() {
    const dispatch = useDispatch()

    return (
        <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
                nextEl: '.button-next'
            }}
            onSlideChange={(swiper) => dispatch(setSlideIndex(swiper.activeIndex))}
        >
            {[BsCodeSlash, GiWeightLiftingUp, SiAtom, FaGraduationCap].map(icon => (
                <SwiperSlide key={uuidv4()}>
                    <SwiperContent Icon={icon} />
                </SwiperSlide>
            ))}
            <SwiperSlide>
                <Grid container justifyContent='center' alignItems='center'>
                    <SpidermanSvg />
                </Grid>
            </SwiperSlide>
        </Swiper>
    );
}