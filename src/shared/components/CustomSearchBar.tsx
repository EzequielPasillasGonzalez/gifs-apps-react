import { useEffect, useState, type KeyboardEvent } from "react";

interface CustomSearchBarProps {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const CustomSearchBar = ({
  placeholder = "Buscar",
  onQuery,
}: CustomSearchBarProps) => {
  const [query, setQuery] = useState("");

  //** Se dispara en cuanto el componente se monta  */
  useEffect(
    () => {
      const timeoutId = setTimeout(() => {
        onQuery(query);
      }, 700);

      //** Los efectos tienen un return especial */
      /** Se ejecuta la "segunda funcion o funcion de limpieza" en cuando se desmonta o cada que vez que se ejecute la funcion principal */
      return () => {
        // console.log("Funcion de limpieza");
        clearTimeout(timeoutId);
      };
    },
    [query, onQuery], //** Se especifica las dependencias que lo detonan */
  );

  const handleSearch = () => {
    onQuery(query);
    // setQuery(""); Setear a un string vacio
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
