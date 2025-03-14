import React from "react";

const UserInfo = ({ users, room }) => {
  return (
    <div className="card outline outline-neutral p-2 ">
      <h2 className="font-bold">INFO</h2>
      {users ? (
        <div>
          <h3>Users currently chatting in {room.toUpperCase()}:</h3>
          <ul className="text-center">
            {users.map((user) => (
              <li className="font-semibold text-blue-300" key={user}>
                {user.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default UserInfo;
