import { getMovies, getShows } from "@/lib/tmdb";
import MyListClient from "@/components/MyListClient";

export default async function MyListPage() {
  const [movies, shows] = await Promise.all([getMovies(), getShows()]);
  const allMedia = [...movies, ...shows];
  return <MyListClient allMedia={allMedia} />;
}
