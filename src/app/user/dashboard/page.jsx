import authSessionUser from "@/app/libs/auth-libs";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const user = await authSessionUser();
  return (
    <div>
      <h3 className="text-center">Dashboard</h3>
      <h5 className="text-center">Welcome ... {user.email}</h5>
      <Image src={user.image} width={350} height={350} />
    </div>
  );
};

export default Page;
