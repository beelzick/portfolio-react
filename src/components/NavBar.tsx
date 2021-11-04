import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MuiButton from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { Link, animateScroll as scroll } from 'react-scroll'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';


export default function NavBar() {
    const trigger = useScrollTrigger();
    const scrollToBottomPage = () => {
        scroll.scrollToBottom()
    }

    return (
        <Slide appear={false} direction='down' in={!trigger}>
            <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', zIndex: 1000 }} >
                <AppBar position='static'>
                    <Toolbar sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
                        {['about', 'skills', 'projects'].map(link => (
                            <Link
                                key={uuidv4()}
                                to={link}
                                spy={true}
                                smooth={true}
                                style={{ display: 'flex' }}
                            >
                                <MuiButton color='secondary' variant='outlined' sx={{ marginRight: '10px' }}>
                                    {link}
                                </MuiButton>
                            </Link>
                        ))}
                        <MuiButton color='secondary' onClick={scrollToBottomPage} variant='outlined' sx={{ marginRight: '10px' }}>
                            contact
                        </MuiButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </Slide>
    )
}