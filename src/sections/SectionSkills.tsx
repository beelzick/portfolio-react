import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Icons from '../components/Icons/Icons'
import TypographySlide from '../components/Animated/TypographySlide'
import MotionDiv from '../components/Animated/MotionDiv'

export default function SectionSkills() {
    const typographyRest = {
        variant: 'h3',
        mb: 12
    }

    return <section className='section-height' id='skills'>
        <Grid container direction='column' alignItems='center'>
            <TypographySlide {...typographyRest}>
                SKILLS
            </TypographySlide>
            <MotionDiv>
                <Grid container alignItems='center' justifyContent='center'
                    sx={{ width: { md: '80%', xl: '60%' }, marginBottom: { xs: '50px', md: '72px' } }}>
                    <Icons />
                </Grid>
            </MotionDiv>
            <MotionDiv>
                <Typography variant='body1' align='center' sx={{ width: { sm: '80%', md: '70%', lg: '60%' }, }}>
                    These are the technologies I use the most, I am ready to learn new too.
                </Typography>
            </MotionDiv>
        </Grid>
    </section>
}