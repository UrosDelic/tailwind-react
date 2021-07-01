import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [responseData, setResponseData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        setIsLoaded(true);
        setResponseData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="usersPage-container">
      <h1 className="heading">Users Page</h1>
      <div>
        <ul className="w-screen h-screen">
          {!isLoaded ? (
            <p>Loading</p>
          ) : (
            responseData.map((user) => (
              <div className="user-box flex flex-row" key={user.id}>
                <p className="p-1">{user.first_name} </p>
                <p className="p-1">{user.last_name}</p>
                {/* POGLEDAJ PRIMER NA REGRES.IN */}
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
