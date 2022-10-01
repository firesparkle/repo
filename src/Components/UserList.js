import * as React from "react";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import classes from "../Styles/UserList.module.css";

export default function UserList() {
  const userList = useSelector((state) => state.user);
  //storing the users in UserItem components
  const usersList = userList.map((user, index) => (
    <UserItem
      key={index}
      name={user.name}
      city={user.city}
      mobile={user.mobile}
    />
  ));

  return (
    <section className={classes.users}>
      <ul>{usersList}</ul>
    </section>
  );
}
