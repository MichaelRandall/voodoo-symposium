import React, { Suspense } from "react";

const MigrationList = React.lazy(() => import("./MigrationList"));

const MigrationsPage = () => {
  return (
    <>
    <Suspense fallback={<h2>Loading...</h2>}>
      <MigrationList />
    </Suspense>
    </>
  );
};

export default MigrationsPage;
