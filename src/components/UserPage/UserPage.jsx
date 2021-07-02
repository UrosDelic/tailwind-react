import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams();

  return (
    <div className='UserPage'>
      <h1>User page - {id}</h1>
    </div>
  );
};

export default UserPage;
