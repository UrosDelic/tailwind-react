import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../AxiosCustomHook/useAxios";

const UserPage = () => {
  const { id } = useParams();
  const { responseData, isLoading } = useAxios(`https://reqres.in/api/users/${id}`);

  return <div className='UserPage'>{responseData.email}</div>;
};

export default UserPage;
