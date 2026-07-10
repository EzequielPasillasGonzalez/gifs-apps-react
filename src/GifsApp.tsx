import { useState } from "react";
import { GifList } from "./gifs/components/GifList.tsx";
import { PreviousSearches } from "./gifs/components/PreviousSearches.tsx";
import { mockGifs } from "./mock-data/gifs.mock.ts";
import { CustomHeader } from "./shared/components/CustomHeader.tsx";
import { CustomSearchBar } from "./shared/components/CustomSearchBar.tsx";
import { getGifByQuery } from "./gifs/actions/get-gifs-by-query.action.ts";
import type { Gif } from "./gifs/interfaces/gif.interface.ts";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>(mockGifs);

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

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />
      {/* Search */}
      <CustomSearchBar placeholder="Buscar gifs" onQuery={handleSearch} />
      {/* Busquedas previas */}
      <PreviousSearches
        searchers={previousTerms}
        onLabelClicked={handleTermClicked}
      />
      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
