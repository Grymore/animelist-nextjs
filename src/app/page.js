import FilmList from "@/components/FilmList";
import Link from "next/link";
=======
import { data } from "autoprefixer";
import FilmList from "./search/components/FilmList";
>>>>>>> parent of b623626 (session 1)

const Home = async () => {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime`);

  const anime = await response.json();

  return (
    <>
      <h1>Daftar Populer</h1>

      {anime.data.map((data) => {
        return (
          <FilmList title={data.title} images={data.images.webp.image_url} />
        );
      })}
    </>
  );
};
export default Home;
