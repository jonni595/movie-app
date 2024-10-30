import { useEffect, useState } from "react";
import type { IMovie } from "../interface";
import { API_URL, SEARCH_API } from "../config";

export const useMovie = (initialValue: number, initialQuery?: string) => {
  const [movie, setMovie] = useState<IMovie | null>(null),
    [error, setError] = useState<string | null>(null),
    [loading, setLoading] = useState(true),
    [page, setPage] = useState<number>(initialValue),
    [query, setQuery] = useState<string>(initialQuery || "");

  const getMovies = async (count: number, search?: string) => {
    try {
      let url = "";
      if (query) {
        url = `${SEARCH_API}${search}`;
      } else {
        url = `${API_URL}${count}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
      console.log(data);
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
      getMovies(page, query);
    }, 1500);
    return () => clearTimeout(timer);
  }, [page, query]);

  return {
    movie,
    error,
    loading,
    page,
    handleNextPage,
    handlePrevPage,
    setQuery,
  };
};
