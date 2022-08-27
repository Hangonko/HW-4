import React, { Component } from "react";

class First extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  componentDidMount() {
    this.setState({ users: generateUsers() });
  }

  randRemove = () => {
    this.setState((item) => {
      const ind = Math.floor(Math.random() * item.users.length);
      const filtered = item.users.filter((x, index) => index !== ind);
      return { users: filtered };
    });
  };

  render() {
    const { users } = this.state;
    document.title = `${this.state.users.length} User left`;
    return (
      <>
        {users.map((user) => {
          const { name, age, id } = user;
          return (
            <React.Fragment key={id}>
              <div>
                <p>{name}</p>
                <p>{age}</p>
              </div>
            </React.Fragment>
          );
        })}
        <button onClick={this.randRemove}>Delete Random User</button>
      </>
    );
  }
}

const generateUsers = () => {
  return [
    {
      name: "George",
      age: 20,
      id: 1,
    },
    {
      name: "Saba",
      age: 23,
      id: 2,
    },
    {
      name: "Nini",
      age: 22,
      id: 3,
    },
    {
      name: "Nika",
      age: 18,
      id: 4,
    },
    {
      name: "Sally",
      age: 26,
      id: 5,
    },
    {
      name: "Davit",
      age: 24,
      id: 6,
    },
    {
      name: "Irakli",
      age: 21,
      id: 7,
    },
    {
      name: "Kaxi",
      age: 18,
      id: 8,
    },
    {
      name: "Mariam",
      age: 19,
      id: 9,
    },
    {
      name: "Luka",
      age: 19,
      id: 10,
    },
  ];
};

export default First;
