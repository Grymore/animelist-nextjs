"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <FileSearch size={44} className="text-colors-accent" />
        <h3 className="text-colors-accent font-bold text-4xl">NOT FOUND</h3>
        <Link
          href="/"
          className="text-colors-primary hover:text-colors-accent transition-all"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
