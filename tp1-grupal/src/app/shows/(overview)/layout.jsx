import SideBarLayout from "@/components/SideBarLayout";
import { getGenres } from "@/lib/tmdb";

export default async function ShowsLayout({ children }) {
  const genres = await getGenres("tv");
  return (
    <SideBarLayout genres={genres} type="shows">
      {children}
    </SideBarLayout>
  );
}