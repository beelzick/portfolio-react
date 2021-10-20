import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Icons from '../components/Icons/Icons'
import TypographySlide from '../components/Animated/TypographySlide'
import MotionDiv from '../components/Animated/MotionDiv'

export default function SectionSkills() {
    return <section className='section-height' name='skills'>
        <Grid container direction='column' alignItems='center'>
            <TypographySlide variant='h3' component='h3' mb={12}>
                SKILLS
            </TypographySlide>
            <MotionDiv style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container alignItems='center' justifyContent='center'
                    sx={{ width: { md: '80%', xl: '60%' }, marginBottom: { xs: '50px', md: '72px' } }}>
                    <Icons />
                </Grid>
            </MotionDiv>
            <MotionDiv style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='body1' align='center' sx={{ width: { sm: '80%', md: '70%', lg: '60%' }, }}>
                    These are the technologies I use the most, I am ready to learn new too.
                    I can work on either a frontend or backend I enjoy them both.
                </Typography>
            </MotionDiv>
        </Grid>
    </section>
}