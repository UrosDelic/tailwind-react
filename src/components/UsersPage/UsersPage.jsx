import axios from "axios";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [responseData, setResponseData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  //   const [error, setError] = useState(null);
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
        // setIsLoaded(true);
        // setError(error);
      });
  };

  return (
    <div className='usersPage-container'>
      <h1 className='heading'>Users Page</h1>
      <div>
        <ul className='w-screen h-screen'>
          {!isLoaded ? (
            <p>Loading</p>
          ) : (
            responseData.map((user) => <li key={user.id}>{user.email}</li>)
          )}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
