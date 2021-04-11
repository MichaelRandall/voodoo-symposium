import React, { Suspense } from "react";

const CourseList = React.lazy(() => import("./CourseList"));


const CoursesPage = () => {
  return (
    <>
    <Suspense fallback={<h2>Loading...</h2>}>
      <CourseList />
    </Suspense>
    </>
  );
};

export default CoursesPage;
