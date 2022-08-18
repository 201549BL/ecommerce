import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

const Auth = ({ role, loader, children }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session && status === "unauthenticated") return signIn();
  }, [session, status]);

  if (!session) return loader;
  return children;
};

export default Auth;
