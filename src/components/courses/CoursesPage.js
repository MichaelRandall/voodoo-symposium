import React, { Suspense, useState } from "react";

const CourseList = React.lazy(() => import("./CourseList"));
import { Redirect } from "react-router-dom";

const CoursesPage = () => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);

  return (
    <>
      {redirectToAddCoursePage && <Redirect to="/course" />}
      <h2>Courses</h2>

      <button
        style={{ marginBottom: 20 }}
        className="btn btn-primary add-course"
        onClick={() => setRedirectToAddCoursePage(true)}
      >
        Add Course
      </button>
      <Suspense fallback={<h2>Loading...</h2>}>
        <CourseList />
      </Suspense>
    </>
  );
};

export default CoursesPage;
