import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { getMigrations, getMembers } from "../../redux";

const MigrationList = ({ migrationsData, membersData, getMigrations, getMembers }) => {
  useEffect(() => {
    getMigrations();
    getMembers();
  }, []);
  return migrationsData.loading ? (
    <h2>Loading</h2>
  ) : migrationsData.error ? (
    <h2>{migrationsData.error}</h2>
  ) : (
    <div>
      <h2>Migration List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Migration Owner</th>
            <th>Migration Name</th>
            <th>Migration type</th>
            <th>App Name</th>
          </tr>
        </thead>
        <tbody>
          {migrationsData &&
            migrationsData.migrations &&
            migrationsData.migrations.map((migration) => (
              <tr key={migration.id}>
                <td>{migration.id}</td>
                <td>{membersData.members.find((a) => a.id === migration.migration_ownerId).name}</td>
                <td>{migration.os}</td>
                <td>{migration.migration_type}</td>
                <td>{migration.app_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    migrationsData: state.migrations,
    membersData: state.members,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMigrations: () => dispatch(getMigrations()),
    getMembers: () => dispatch(getMembers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MigrationList);
