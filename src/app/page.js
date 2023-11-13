<<<<<<< HEAD
import { data } from "autoprefixer";
import FilmList from "./search/components/FilmList";

const Home = async () => {

  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime`
  );

  const anime = await response.json();
 

  return (
    <>
      <h1>Daftar Populer</h1>

      {anime.data.map(data => {
        return <FilmList title={data.title} images={data.images.webp.image_url}/>
        
      })}
      
    </>  
  )

=======
import FilmList from "@/components/FilmList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.BASE_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

  const anime = await response.json();

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Daftar Populer</h1>
        <Link
          href={"/populer"}
          className="md:text-xl text-sm underline hover:text-indigo-500 transition-all"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <FilmList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
>>>>>>> 35a076a97dba18968b00963ba025be6d7e90b0aa
};
export default Home;
