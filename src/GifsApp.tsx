import { GifList } from "./gifs/components/GifList.tsx";
import { PreviousSearches } from "./gifs/components/PreviousSearches.tsx";
import { useGifs } from "./gifs/hooks/useGifs.tsx";
import { mockGifs } from "./mock-data/gifs.mock.ts";

import { CustomHeader } from "./shared/components/CustomHeader.tsx";
import { CustomSearchBar } from "./shared/components/CustomSearchBar.tsx";

export const GifsApp = () => {
  const { gifs, handleSearch, handleTermClicked, previousTerms } = useGifs({
    gifsList: mockGifs,
  });
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
