import React from "react";

const UserInfo = ({ users, room }) => {
  return (
    <div className="bg-gray-200 text-black p-2 rounded-r-md">
      <h2 className="font-bold">INFO</h2>
      {users ? (
        <div>
          <h3>Users currently chatting in {room}:</h3>
          <ul>
            {users.map((user, index) => {
              <li key={index}>{user}</li>;
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default UserInfo;
