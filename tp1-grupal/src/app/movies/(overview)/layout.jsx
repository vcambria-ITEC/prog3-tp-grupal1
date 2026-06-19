import SideBarLayout from "@/components/SideBarLayout";
import { getGenres } from "@/lib/tmdb";

export default async function MoviesLayout({ children }) {
  const genres = await getGenres("movie");
  return (
    <SideBarLayout genres={genres} type="movies">
      {children}
    </SideBarLayout>
  );
}