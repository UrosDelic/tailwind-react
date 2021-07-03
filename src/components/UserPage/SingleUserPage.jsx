import React from "react";
import { useParams } from "react-router-dom";
import useAxiosGet from "../AxiosCustomHook/useAxios";

const SingleUserPage = () => {
  const { id } = useParams();
  const { responseData } = useAxiosGet(`https://reqres.in/api/users/${id}`);
  console.log(responseData, "single user");
  if (responseData.length < 1) {
    return (
      <h1 className="w-screen h-screen heading text-center mt-20">User by id - {id} is missing</h1>
    );
  } else
    return (
      <div className="UserPage flex justify-center mt-20">
        <div className="user-box">
          <div>
            <img src={responseData.avatar} alt="" />
          </div>
          <div className="flex flex-row">
            <p className="p-1">{responseData.first_name}</p>
            <p className="p-1">{responseData.last_name}</p>
          </div>
          <p>{responseData.email}</p>
        </div>
      </div>
    );
};

export default SingleUserPage;
