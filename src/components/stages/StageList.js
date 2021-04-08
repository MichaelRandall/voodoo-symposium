import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { getStages } from "../../redux";

const StageList = ({ stagesData, getStages }) => {
  useEffect(() => {
    getStages();
  }, []);
  return stagesData.loading ? (
    <h2>Loading</h2>
  ) : stagesData.error ? (
    <h2>{stagesData.error}</h2>
  ) : (
    <div>
      <h2>Stage List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Stage</th>
          </tr>
        </thead>
        <tbody>
          {stagesData &&
            stagesData.stages &&
            stagesData.stages.map((stage) => (
              <tr key={stage.id}>
                <td>{stage.id}</td>
                <td>{stage.stage}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stagesData: state.stages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStages: () => dispatch(getStages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StageList);
