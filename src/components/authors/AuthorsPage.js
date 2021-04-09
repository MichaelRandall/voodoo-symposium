import React, { Suspense } from "react";

const AuthorList = React.lazy(() => import("./AuthorList"));

const AuthorsPage = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}><AuthorList /></Suspense>
    </>
  );
};

export default AuthorsPage;
