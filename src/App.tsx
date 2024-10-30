import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Loading, Navbar, NextButton } from "./components";
import { Card } from "./components/Card/Card";
import { Container } from "./layout/Layout.style";
import Main from "./layout/Main";
import { theme } from "./theme/theme";
import { useMovie } from "./hooks/useMovie";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const {
    movie,
    error,
    loading,
    page,
    handleNextPage,
    handlePrevPage,
    setQuery,
  } = useMovie(1, search);

  const handleSubmit = () => {
    setQuery(search);
    setSearch("");
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Navbar
          query={search}
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={handleSubmit}
        />
        <Main>
          {loading ? (
            <Loading />
          ) : (
            movie?.results.map((movie) => <Card key={movie.id} movie={movie} />)
          )}
          {page > 1 && (
            <NextButton
              onClick={handlePrevPage}
              Icon={FaArrowAltCircleLeft}
              direction="prev"
            >
              Previous
            </NextButton>
          )}
          {!loading && (
            <NextButton
              onClick={handleNextPage}
              Icon={FaArrowAltCircleRight}
              direction="next"
            >
              Next
            </NextButton>
          )}
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
