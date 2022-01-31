import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import RegisterForm from './pages/RegisterForm';
import Theme from './theme'

function App() {

  const {theme, mode, colorMode} = Theme()

  return (
    <ThemeProvider theme={theme}>
      <NavBar mode={mode} colorMode={colorMode} />
      <RegisterForm />
    </ThemeProvider>
  );
}

export default App;
