import { Menu } from "@headlessui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import React, { Fragment } from "react";

const LogInButton = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated")
    return <button onClick={() => signIn()}>Sign in</button>;

  return (
    <Menu as="div" className="relative">
      <Menu.Button as="button" className="flex h-full gap-2">
        <>
          <p className=" self-center">Admin</p>
          {session.user.image && (
            <img className="h-full rounded-full" src={session.user.image} />
          )}
        </>
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="absolute right-0  w-64 rounded-md border border-slate-400 bg-slate-100 p-1 shadow-xl"
      >
        <Menu.Item as="li">
          {({ active }) => (
            <button
              onClick={() => signOut()}
              className={`${
                active && "bg-teal-500 text-white"
              } w-full  whitespace-nowrap  rounded p-2 text-left`}
            >
              Sign out
            </button>
          )}
        </Menu.Item>
        <Menu.Item as="li">
          {({ active }) => (
            <button
              className={`${
                active && "bg-teal-500 text-white"
              } w-full  whitespace-nowrap rounded p-2 text-left`}
            >
              Account
            </button>
          )}
        </Menu.Item>

        {session.user.roles.includes("ADMIN") && (
          <>
            <div className="my-1 h-[1px] w-full bg-slate-400"></div>
            <Menu.Item as="li">
              {({ active }) => (
                <Link href="admin">
                  <button
                    className={`${
                      active && "bg-purple-600 text-white"
                    } w-full  whitespace-nowrap rounded p-2 text-left`}
                  >
                    Admin tools
                  </button>
                </Link>
              )}
            </Menu.Item>
          </>
        )}
      </Menu.Items>
    </Menu>
  );
};

export default LogInButton;
