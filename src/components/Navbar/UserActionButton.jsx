import authSessionUser from "@/app/libs/auth-libs";
import Link from "next/link";
import React from "react";

const UserActionButton = async () => {
  const user = await authSessionUser();
  const userLabel = user ? "Sign Out" : "Sign In";
  const actinUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex gap-2 justify-between py-1">
      {user ? <Link href="/user/dashboard">Dashboard</Link> : null}
      <Link
        href={actinUrl}
        className="bg-colors-dark text-colors-accent py-1 px-12 inline-block"
      >
        {userLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
