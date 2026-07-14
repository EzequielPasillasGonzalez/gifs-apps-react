import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface.ts";

import { getGifByQuery } from "../actions/get-gifs-by-query.action.ts";

interface useGifsProps {
  gifsList: Gif[];
}
export const useGifs = ({ gifsList }: useGifsProps) => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>(gifsList);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const newGifs = await getGifByQuery(query);

    setGifs(newGifs);
  };

  return {
    previousTerms,
    gifs,
    handleTermClicked,
    handleSearch,
  };
};
