import { useAuthStore } from "@/stores/userstore";

import React, { useEffect } from "react";
import Loader from "./ui/Loader";

interface Props {
  children: React.ReactNode;
}

const CheckUser: React.FC<Props> = ({ children }) => {
  const { checkUser, loading } = useAuthStore();
  useEffect(() => {
    console.log("checking user");
    checkUser();
  }, [checkUser]);

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  return <>{children}</>;
};

export default CheckUser;
