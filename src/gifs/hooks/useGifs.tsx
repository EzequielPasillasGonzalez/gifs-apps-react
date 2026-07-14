import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface.ts";

import { getGifByQuery } from "../actions/get-gifs-by-query.action.ts";

interface useGifsProps {
  gifsList: Gif[];
}

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = ({ gifsList }: useGifsProps) => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>(gifsList);

  // Referencias mutables que no causan re-render.
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    // Para acceder a los valores que estan dentro
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const newGifs = await getGifByQuery(query);

    setGifs(newGifs);

    gifsCache.current[query] = newGifs;
  };

  return {
    gifs,
    handleSearch,
    handleTermClicked,
    previousTerms,
  };
};
