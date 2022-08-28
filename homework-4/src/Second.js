import React, { useState, useEffect } from "react";

const Second = () => {
  const randID = new Date().valueOf();
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [alertText, setAlert] = useState("");

  useEffect(() => {
    if (alertText) {
      alert(alertText);
    }
  }, [alertText]);

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
    setTimeout(() => {
      setAlert("User added");
    }, 500);
  };

  const deleteUser = (userID) => {
    setUsers((prev) => {
      const filterUsers = prev.filter((user) => user.userID !== userID);
      return filterUsers;
    });
    setTimeout(() => {
      setAlert("User removed");
    }, 500);
  };

  const updateUser = (userID) => {
    setUsers((prev) => {
      const findx = prev.findIndex((user) => user.userID === userID);
      const updated = { ...prev[findx], age: randAge(10, 60) };
      const newArr = [...prev];
      newArr[findx] = updated;
      return newArr;
    });

    setTimeout(() => {
      setAlert("User Updated");
    }, 500);
  };

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
