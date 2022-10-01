import classes from "../Styles/UserItem.module.css";

const UserItem = (props) => {
  return (
    <li className={classes.user}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.city}</div>
        <div className={classes.description}>{props.phone}</div>
      </div>
    </li>
  );
};

export default UserItem;
