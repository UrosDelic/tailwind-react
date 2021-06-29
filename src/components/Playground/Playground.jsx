import Dinput from "../../dynamicComponents/Dinput";
import Navbar from "../Navbar/Navbar";
import DtextArea from "../../dynamicComponents/DtextArea";

const Playground = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='playground flex flex-col m-5 h-screen'>
        <label htmlFor=''>First Name:</label>
        <Dinput className='firstname-input mb-5' id='firstName'></Dinput>
        <label htmlFor=''>Last Name:</label>
        <Dinput className='lastname-input mb-5' id='lastName'></Dinput>
        <label>text area</label>
        <DtextArea></DtextArea>
      </div>
    </div>
  );
};

export default Playground;
