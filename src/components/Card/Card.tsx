import { IMG_PATH } from "../../config";
import type { CardProps } from "../../interface";
import {
  Container,
  OverviewContainer,
  Image,
  Title,
  Vote,
  Overview,
  VoteContainer,
  Language,
  ImageContainer,
} from "./Card.style";

const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={IMG_PATH + movie.poster_path} alt={movie.title} />
        <OverviewContainer>
          <Title>{movie.title}</Title>
          <Overview>{movie.overview}</Overview>
          <VoteContainer>
            <Language>{movie.original_language}</Language>
            <Vote>{movie.vote_average}</Vote>
          </VoteContainer>
        </OverviewContainer>
      </ImageContainer>
    </Container>
  );
};

export { Card };
