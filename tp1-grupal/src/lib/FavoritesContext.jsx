"use client";
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("syncfive-favorites");
      if (!stored) return;
      const parsed = JSON.parse(stored);
      const isValid = Array.isArray(parsed) && parsed.every((f) => typeof f === "object" && f?.id);
      if (isValid) {
        setFavorites(parsed);
      } else {
        localStorage.removeItem("syncfive-favorites");
      }
    } catch {
      localStorage.removeItem("syncfive-favorites");
    }
  }, []);

  const toggleFav = (media) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === media.id);
      const next = exists
        ? prev.filter((f) => f.id !== media.id)
        : [...prev, media];
      localStorage.setItem("syncfive-favorites", JSON.stringify(next));
      return next;
    });
  };

  const isFav = (id) => favorites.some((f) => f.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, isFav, toggleFav }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
