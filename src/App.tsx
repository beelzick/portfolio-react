import SectionHome from './sections/SectionHome';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './helpers/theme'
import { ThemeProvider } from '@mui/material/styles';
import SectionAbout from './sections/SectionAbout';
import SectionSkills from './sections/SectionSkills';
import SectionProjects from './sections/SectionProjects';
import SectionContact from './sections/SectionContact';
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return <>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SectionHome />
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionContact />
      </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  </>
}

export default App;
