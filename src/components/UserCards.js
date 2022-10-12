import React from "react";
import data from "../data.json";

const users = data.users;

const IndividualCard = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.location}</p>
      <p>{user.favouriteFood}</p>
    </div>
  );
};

const userCards = () => {
  return (
    <div>
      {users.map((user) => (
        <IndividualCard user={user} key={user.name} />
      ))}
    </div>
  );
};

export default userCards;
