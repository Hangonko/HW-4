import React, { useState } from "react";

const Second = () => {
  return (
    <>
      <Component />
    </>
  );
};

export default Second;

function Component() {
  const randID = new Date().valueOf();

  const randAge = (min, max) => {
    const calculated = Math.floor(Math.random() * (max - min)) + min;
    return calculated;
  };

  const [name, setName] = useState("");

  const inputOnChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const initValues = {
    userName: name,
    age: randAge(10, 60),
    id: randID,
  };

  const user = () => {
    return [
      {
        name: initValues.userName,
        age: initValues.age,
        userID: initValues.id,
      },
    ];
  };

  const [users, setUsers] = useState([]);

  const addUser = () => {
    setUsers(user());
  };

  console.log(users);

  return (
    <>
      {users.map((user) => {
        const { name, age, userID } = user;
        return (
          <React.Fragment key={userID}>
            <div>
              <p>{name}</p>
              <p>{age}</p>
              <button>Delete</button>
              <button>Update</button>
            </div>
          </React.Fragment>
        );
      })}
      <input value={name} placeholder="Username" onChange={inputOnChange} />
      <button onClick={addUser}>add</button>
    </>
  );
}
