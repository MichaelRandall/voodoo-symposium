import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { getMigrations } from "../../redux";

const MigrationList = ({ migrationsData, getMigrations }) => {
  useEffect(() => {
    getMigrations();
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
                <td>{migration.name}</td>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMigrations: () => dispatch(getMigrations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MigrationList);
