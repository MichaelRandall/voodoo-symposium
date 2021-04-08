import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { getCourses, getAuthors } from "../../redux";

// getAuthors argument/param will data shows in console
const CourseList = ({ coursesData, getCourses, getAuthors }) => {
  // console.log(coursesData);
  // console.log(authorsData);
  useEffect(() => {
    getCourses(); // actually pulls data
    getAuthors(); // actually pulls data and shows in console
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
                {/* <td>{course.authorName}</td> */}
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(typeof state.authors);
  // console.log(Object.keys(state.courses));
  console.log("The state of state");
  console.log(state);
  console.log("The state of courses");
  console.log(state.courses);
  // console.log(typeof state.authors);
  // console.log(Object.keys(state.authors));
  console.log("The state of authors");
  console.log("this is good", state.authors);
  return {
    coursesData: state.courses,
    authorsData: state.authors,
    // coursesData:
    //   state.authors.length === 0
    //     ? []
    //     : state.courses.map((course) => {
    //         return {
    //           ...course,
    //           authorName: state.authors.find((a) => a.id === course.authorId)
    //             .name,
    //         };
    //       }),
    // authorsData: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: () => dispatch(getCourses()),
    getAuthors: () => dispatch(getAuthors()), //whole code breaks if these commented out
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
