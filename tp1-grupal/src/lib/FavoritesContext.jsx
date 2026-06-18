"use client";
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favIds, setFavIds] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("syncfive-favorites");
    if (stored) setFavIds(JSON.parse(stored));
  }, []);

  const toggleFav = (id) => {
    setFavIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      localStorage.setItem("syncfive-favorites", JSON.stringify(next));
      return next;
    });
  };

  const isFav = (id) => favIds.includes(id);

  return (
    <FavoritesContext.Provider value={{ favIds, isFav, toggleFav }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
