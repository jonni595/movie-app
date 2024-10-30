import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Loading, Navbar, NextButton } from "./components";
import { Card } from "./components/Card/Card";
import { Container } from "./layout/Layout.style";
import Main from "./layout/Main";
import { theme } from "./theme/theme";
import { useMovie } from "./hooks/useMovie";

const App = () => {
  const { movie, error, loading, handleNextPage } = useMovie(1);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Navbar />
        <Main>
          {loading ? (
            <Loading />
          ) : (
            movie?.results.map((movie) => <Card key={movie.id} movie={movie} />)
          )}
          {!loading && <NextButton onNextClick={handleNextPage} />}
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
