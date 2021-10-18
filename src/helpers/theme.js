import { createTheme } from '@mui/material/styles';

let theme = createTheme()

theme = createTheme(theme, {
    typography: {
        h1: {
            fontFamily: '\'Open Sans\', sans-serif',
            fontWeight: 800,
            fontSize: '12vw',
            [theme.breakpoints.up('sm')]: {
                textAlign: 'center'
            },
            [theme.breakpoints.up('md')]: {
                textAlign: 'unset'
            },
        },
        h2: {
            opacity: 0.8,
            fontSize: '4.5vw',
            [theme.breakpoints.up('sm')]: {
                textAlign: 'center',
            },
            [theme.breakpoints.up('md')]: {
                textAlign: 'unset',
            },
        },
        h3: {
            width: '100%',
            fontSize: '3rem',
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
                fontSize: '4rem',
            },
            [theme.breakpoints.up('lg')]: {
                textAlign: 'unset'
            },
            fontFamily: '\'Open Sans\', sans-serif',
            fontWeight: 800,
            color: '#16db65'
        },
        h4: {
            color: '#16db65',
            fontWeight: 700
        },
        h5: {
            color: '#1B2021',
            fontSize: '2rem',
            fontWeight: 600
        },
        body1: {
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            [theme.breakpoints.up('sm')]: {
                fontSize: '1.4rem',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '1.6rem',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '1.8rem',
            },
        },
        body2: {
            fontSize: '1rem',
            color: '#fff',
            fontWeight: 500
        }
    },
    palette: {
        primary: {
            main: '#1B2021'
        },
        secondary: {
            main: '#16db65'
        }
    }
})

export default theme