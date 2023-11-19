import FilmList from "@/components/FilmList";
import Header from "@/components/FilmList/Header";
import { apiRequest } from "./libs/apiRequest";

const Page = async () => {
  const topAnime = await apiRequest("top/anime", "limit=8");

  return (
    <>
      {/* anime populer */}
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <FilmList api={topAnime} />
      </section>
    </>
  );
};
export default Page;
