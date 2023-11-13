import Image from "next/image";

const FilmList = ({title, images}) => {
  return (
    <div className="bg-indigo-500">
      <Image src={images} alt="..." width={150} height={150} />
      <h3>{title}</h3>
    </div>
  );
};

export default FilmList;
