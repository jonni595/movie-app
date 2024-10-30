import { ThemeProvider } from "styled-components";
import { Navbar } from "./components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./theme/theme";
import { Container } from "./layout/Layout.style";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Navbar />
      </Container>
    </ThemeProvider>
  );
};

export default App;
