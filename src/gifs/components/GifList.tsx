import type { FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock.ts";

interface GifListProps {
  gifs: Gif[];
}

// FC: Funcional Componente => Es un tipa estricto del componente
export const GifList: FC<GifListProps> = ({ gifs }) => {
  // export const GifList = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};
