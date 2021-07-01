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
      <h1 className=''></h1>
      <div>
        {responseData.forEach((el) => {
          console.log(el.first_name);
        })}
      </div>
    </div>
  );
};

export default UsersPage;
