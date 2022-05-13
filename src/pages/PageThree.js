import React, { useState } from "react";
import { getUser } from "../services/userApi";

const PageThree = () => {
  const [userName, setUserName] = useState("");
  const [listUser, setListUser] = useState([]);

  const handleChange = ({ target: { value } }) => setUserName(value);

  const handleClick = async () => {
    const { data } = await getUser(userName);
    setListUser(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="githubUser"
        value={userName}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
      <div>
        <ul>
          {listUser.map((item) => {
            return (
              <li key={item.id}>
                {item.name} - {item.owner.login} -{" "}
                {item.description === null ? "SEM DESCRIÇÃO" : item.description}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PageThree;
