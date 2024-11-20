import React from "react";

const UserInfo = ({ users }) => {
  console.log(users);

  return (
    <div className="bg-gray-200 text-black p-2 rounded-r-md">
      <h2 className="font-bold">INFO</h2>
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
