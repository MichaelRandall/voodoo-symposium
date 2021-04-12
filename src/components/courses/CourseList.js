import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { getCourses, getAuthors } from "../../redux";

// courses accessed by coursesData.courses, authorsData accessed by authorsData.authors
const CourseList = ({ coursesData, authorsData, getCourses, getAuthors }) => {
  useEffect(() => {
    getAuthors();
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
                <td>
                  <Link to={"/course/" + course.slug}>{course.title}</Link>
                </td>
                <td>
                  {
                    authorsData.authors.find((a) => a.id === course.authorId)
                      .name
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

// defines what properties are available on you component
// selecting the part of the data from the store that the connected component needs.
// the courselist component has access to state.courses through the object key coursesData
// the courselist component has access to state.authors through the object key authorsData
// mapStateToProps is called every time the store state changes
// it receives the entire store state and you specify an object of data the component needs
const mapStateToProps = (state) => {
  const { courses, authors } = state;

  return {
    coursesData: courses,
    authorsData: authors,
  };
};

// example of using destructuring - 1st: create an object
const person = { name: "Mike", age: 54 };
// example of using destructuring - 2nd: specify the name of the prop
const { name } = person;
// example of using destructuring - 3rd: use the name of the prop
console.log("What is wrong? ", name);

// defines what actions are available on your component
const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: () => dispatch(getCourses()),
    getAuthors: () => dispatch(getAuthors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
