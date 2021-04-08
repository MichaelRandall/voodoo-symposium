import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { getAuthors } from "../../redux";

const AuthorList = ({ authorsData, getAuthors }) => {
  useEffect(() => {
    getAuthors();
  }, []);
  return authorsData.loading ? (
    <h2>Loading</h2>
  ) : authorsData.error ? (
    <h2>{authorsData.error}</h2>
  ) : (
    <div>
      <h2>Authors List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {authorsData &&
            authorsData.authors &&
            authorsData.authors.map((author) => (
              <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authorsData: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthors: () => dispatch(getAuthors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
