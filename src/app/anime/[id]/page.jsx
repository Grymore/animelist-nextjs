import { apiRequest } from "@/app/libs/apiRequest";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";

const Page = async ({ params: { id } }) => {
  const mallid = await apiRequest(`anime/${id}`);
  return (
    <>
      <div className="pt-4 px-4">
        <h1 className="text-2xl text-colors-primary">
          {mallid.data.title} - {mallid.data.year}
        </h1>
      </div>
      <div className="text-colors-primary gap-2 flex overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
          <h3>Peringkat</h3>
          <p>{mallid.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
          <h3>Score</h3>
          <p>{mallid.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
          <h3>Episode</h3>
          <p>{mallid.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
          <h3>Member</h3>
          <p>{mallid.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
          <h3>Member</h3>
          <p>{mallid.data.members}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex gap-4 sm:flex-nowrap flex-wrap text-colors-primary">
        <Image
          src={mallid.data.images.webp.image_url}
          alt={mallid.data.images.jpg.image_url}
          width={350}
          height={350}
        />
        <p className="text- justify flex text-xl">{mallid.data.synopsis}</p>
      </div>
      <VideoPlayer youtubeId={id} />
    </>
  );
};

export default Page;
