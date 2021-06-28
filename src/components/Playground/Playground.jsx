import Dinput from "../../dynamicComponents/Dinput";

const Playground = () => {
  return (
    <div className='playground flex flex-col m-5 w-96	'>
      <label htmlFor=''>First Name:</label>
      <Dinput className='firstname-input mb-5' id='firstName'></Dinput>
      <label htmlFor=''>Last Name:</label>
      <Dinput className='lastname-input' id='lastName'></Dinput>
    </div>
  );
};

export default Playground;
