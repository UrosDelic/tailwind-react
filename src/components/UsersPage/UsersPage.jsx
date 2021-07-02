import React from "react";
import { useEffect, useState } from "react";
import getData from "../AxiosClient/GetData";
import { Link } from "react-router-dom";

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
        <div className='flex flex-col md:flex-row xl:flex-row justify-center items-center'>
          {!isLoaded ? (
            <div></div>
          ) : (
            responseData.map((person) => (
              <Link
                to={`/userPage/${person.id}`}
                className='user-hover-box transform hover:bg-gray-700'
              >
                <div className='user-box flex flex-col m-10' key={person.id}>
                  <div className='image-wrapper'>
                    <img className='w-' key={person.avatar} src={person.avatar} alt='' />
                  </div>
                  <div className='flex flex-row text-center'>
                    <p className='p-1'>{person.first_name} </p>
                    <p className='p-1'>{person.last_name}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
