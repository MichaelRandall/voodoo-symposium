import React, { Suspense } from "react";

const CourseList = React.lazy(() => import("./CourseList"));

const CoursesPage = () => {
  // debugger;
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}><CourseList /></Suspense>
      
    </>
  );
};

export default CoursesPage;
