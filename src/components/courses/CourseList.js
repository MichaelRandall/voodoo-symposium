import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { getCourses, getAuthors } from "../../redux";

const CourseList = ({ coursesData, authorsData, getCourses,  getAuthors }) => {
  useEffect(() => {
    getAuthors();  // order of these function calls is important
    getCourses();
  }, []);

  return coursesData.loading ? (
    <h2>Loading</h2>
  ) : coursesData.error ? (
    <h2>{coursesData.error}</h2>
  ) : (
    <div>
      <h2>Course List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {coursesData &&
            coursesData.courses &&
            coursesData.courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>
                  {
                  authorsData.authors.find((a) => a.id === course.authorId).name
                  }
                </td>
                <td>{course.category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    coursesData: state.courses,
    authorsData: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: () => dispatch(getCourses()),
    getAuthors: () => dispatch(getAuthors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
