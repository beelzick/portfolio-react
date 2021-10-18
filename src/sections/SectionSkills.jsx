import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Icons from '../components/Icons/Icons'

export default function SectionSkills() {
    return <section className='section-height' name='skills'>
        <Grid container direction='column' alignItems='center'>
            <Typography variant='h3' component='h3' mb={12}>
                SKILLS
            </Typography>
            <Grid container alignItems='center' justifyContent='center'
                sx={{ width: { md: '80%', xl: '60%' }, marginBottom: { xs: '50px', md: '72px' } }}>
                <Icons />
            </Grid>
            <Typography variant='body1' align='center' sx={{ width: { sm: '80%', md: '70%', lg: '60%' }, }}>
                These are the technologies I use the most, I am ready to learn new too.
                I can work on either a frontend or backend I enjoy them both.
            </Typography>
        </Grid>
    </section>
}