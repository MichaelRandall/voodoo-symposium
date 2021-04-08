import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { getMembers } from "../../redux";

const MemberList = ({ membersData, getMembers }) => {
  useEffect(() => {
    getMembers();
  }, []);
  return membersData.loading ? (
    <h2>Loading</h2>
  ) : membersData.error ? (
    <h2>{membersData.error}</h2>
  ) : (
    <div>
      <h2>Member List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Initials</th>
            <th>Alias</th>
          </tr>
        </thead>
        <tbody>
          {membersData &&
            membersData.members &&
            membersData.members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.initials}</td>
                <td>{member.alias}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    membersData: state.members,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMembers: () => dispatch(getMembers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
