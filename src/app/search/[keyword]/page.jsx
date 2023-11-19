import { apiRequest } from "@/app/libs/apiRequest";
import FilmList from "@/components/FilmList";
import Header from "@/components/FilmList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);

  const searchAnime = await apiRequest("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodeKeyword}...`} />
        <FilmList api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
