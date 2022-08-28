import React, { useState } from "react";

const Second = () => {
  const randID = new Date().valueOf();
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const randAge = (min, max) => {
    const calculated = Math.floor(Math.random() * (max - min)) + min;
    return calculated;
  };

  const user = (preValue) => {
    return [
      ...preValue,
      {
        name: name,
        age: randAge(10, 60),
        userID: randID,
      },
    ];
  };

  const addUser = () => {
    setUsers(user);
  };

  const deleteUser = (userID) => {
    setUsers((previous) => {
      const filterUsers = previous.filter((user) => user.userID !== userID);
      return filterUsers;
    });
  };

  const updateUser = () => {};

  console.log(users);
  return (
    <>
      {users.map((user) => {
        const { name, age, userID } = user;
        return (
          <React.Fragment key={userID}>
            <div>
              <p>
                {name} {age}
              </p>
              <button
                onClick={() => {
                  deleteUser(userID);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  updateUser(userID);
                }}
              >
                Update
              </button>
            </div>
          </React.Fragment>
        );
      })}
      <input
        value={name}
        placeholder="Username"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={addUser}>add</button>
    </>
  );
};

export default Second;
