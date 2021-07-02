import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../AxiosCustomHook/useAxios";

const SingleUserPage = () => {
  const { id } = useParams();
  const { responseData } = useAxios(`https://reqres.in/api/users/${id}`);

  return (
    <div className='UserPage flex justify-center mt-20'>
      <div className='user-box'>
        <div>
          <img src={responseData.avatar} alt='' />
        </div>
        <div className='flex flex-row'>
          <p className='p-1'>{responseData.first_name}</p>
          <p className='p-1'>{responseData.last_name}</p>
        </div>
        <p>{responseData.email}</p>
      </div>
    </div>
  );
};

export default SingleUserPage;
