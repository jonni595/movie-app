import { IconType } from "react-icons";

export interface IMovie {
  page: number;
  results: IMovieResult[];
  total_pages: number;
  total_results: number;
}

export interface IMovieResult {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}

export interface MainProps {
  children: React.ReactNode;
}

export interface CardProps {
  movie: IMovieResult;
}

export interface ButtonProps {
  Icon: IconType;
  children: string;
  onClick: () => void;
  direction?: string;
}

export interface NavbarProps {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}
