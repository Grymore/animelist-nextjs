import Link from "next/link";

const Navbar = () => {
  //   return (
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href={"/"} className="font-bold text-white text-2xl">
          ANIME LIST
        </Link>
        <input placeholder="cari lovely anime..." className=""></input>
      </div>
    </header>
  );
};

export default Navbar;
