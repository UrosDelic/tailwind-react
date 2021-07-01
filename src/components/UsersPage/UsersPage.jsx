import axios from "axios";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        setResponseData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='usersPage-container'>
      <h1 className=''>Users Page</h1>
      <div>
        <ul>
          {responseData.forEach((data) => {
            <li key={data.id}>{data.first_name}</li>;
            console.log(data.id);
            console.log(data.first_name);
          })}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
