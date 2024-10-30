import { useEffect, useState } from "react";
import type { IMovie } from "../interface";
import { API_URL } from "../config";

export const useMovie = (initialValue: number) => {
  const [movie, setMovie] = useState<IMovie | null>(null),
    [error, setError] = useState<string | null>(null),
    [loading, setLoading] = useState(true),
    [page, setPage] = useState(initialValue);

  const getMovies = async (count: number) => {
    try {
      const response = await fetch(`${API_URL}${count}`);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies(page);
    }, 1500);
    return () => clearTimeout(timer);
  }, [page]);

  return { movie, error, loading, page, handleNextPage, handlePrevPage };
};
