import React from "react";

import { Link } from "react-router-dom";
import useAxiosGet from "../AxiosCustomHook/useAxios";

const UsersPage = () => {
  const { responseData, isLoading } = useAxiosGet("https://reqres.in/api/users/");

  return (
    <div className="usersPage-container">
      <h1 className="heading text-center mb-10">Users</h1>
      <div>
        <div className="flex flex-col md:flex-row xl:flex-row justify-center items-center">
          {!isLoading ? (
            <div>LOADING...</div>
          ) : (
            responseData.map((person) => (
              <Link
                key={person.id}
                to={`/users/${person.id}`}
                className="user-hover-box transform hover:bg-gray-700"
              >
                <div className="user-box flex flex-col m-10" key={person.id}>
                  <div className="image-wrapper">
                    <img className="" key={person.avatar} src={person.avatar} alt="" />
                  </div>
                  <div className="flex flex-row text-center">
                    <p className="p-1">{person.first_name} </p>
                    <p className="p-1">{person.last_name}</p>
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
