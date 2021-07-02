import React from "react";
import { useEffect, useState } from "react";
import getData from "../AxiosClient/GetData";

const UsersPage = () => {
  const [responseData, setResponseData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    getData
      .getData()
      .then((response) => {
        setIsLoaded(true);
        setResponseData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='usersPage-container'>
      <h1 className='heading'>Users Page</h1>
      <div>
        <div className='w-screen h-screen'>
          {!isLoaded ? (
            <div></div>
          ) : (
            responseData.map((user) => (
              <div className='user-box flex flex-row' key={user.id}>
                <p className='p-1'>{user.first_name} </p>
                <p className='p-1'>{user.last_name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
