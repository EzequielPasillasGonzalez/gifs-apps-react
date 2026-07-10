import type { FC } from "react";

interface PreviousSearchesPRops {
  searchers: string[];
  onLabelClicked?: (term: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesPRops> = ({
  searchers,
  onLabelClicked,
}) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {searchers.map((search) => (
          <li
            key={search}
            onClick={() =>
              onLabelClicked != null ? onLabelClicked(search) : null
            }
          >
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
