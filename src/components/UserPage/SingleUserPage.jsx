import React from "react";
import { useParams } from "react-router-dom";
import useAxiosGet from "../AxiosCustomHook/useAxios";

const SingleUserPage = () => {
  const { id } = useParams();
  const { responseData, isLoading } = useAxiosGet(`https://reqres.in/api/users/${id}`);

  if (!isLoading) {
    return <div>Loading</div>;
  }
  if (responseData.length < 1) {
    return (
      <p className="w-screen h-screen text-3xl text-center mt-20">User by ID - {id} is missing</p>
    );
  } else
    return (
      <div className="UserPage flex justify-center mt-20">
        <div className="user-box flex flex-col">
          <div>
            <img src={responseData.avatar} alt="" />
          </div>
          <div className="flex flex-row self-center">
            <p className="p-1">{responseData.first_name}</p>
            <p className="p-1">{responseData.last_name}</p>
          </div>
          <p>{responseData.email}</p>
        </div>
      </div>
    );
};

export default SingleUserPage;
