import React, { lazy, Suspense } from "react";
import Skeleton from "../components/Skeleton";
let UserCard = lazy(() => import("../components/UserCard"));

const Users = () => {
  return (
    <div>
      <h1>Users</h1>

      <Suspense fallback={<Skeleton />}>
        <UserCard />
      </Suspense>7
    </div>
  );
};

export default Users;