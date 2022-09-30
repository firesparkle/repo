import {  useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";

function App() {
  const [displayUser, setDisplayUser] = useState(false);
  const userList = useSelector((state) => state.user);

  const openPanelHandler = () => {
    setDisplayUser(true);
  };

  const closePanelHandler = () => {
    setDisplayUser(false);
    console.log(userList);
  };

  return (
    <div className="App">
      {!displayUser && (
        <ul>
          {userList.map((user, index) => (
            <li key={index}>
              {" "}
              <p>{user.name}</p>
              <p>{user.city}</p>
              <p>{user.mobile}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={openPanelHandler}> add user</button>
      {displayUser && <Form closePanel={closePanelHandler}></Form>}
    </div>
  );
}

export default App;
