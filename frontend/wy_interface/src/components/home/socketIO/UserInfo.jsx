import React from "react";

const UserInfo = ({ users }) => {
  return (
    <div>
      <h2>Info</h2>
      {users ? (
        <div>
          <h3>Users currently chatting:</h3>
          <h4>
            {users.map(({ name }) => {
              <p key={name}>{name}</p>;
            })}
          </h4>
        </div>
      ) : null}
    </div>
  );
};

export default UserInfo;
