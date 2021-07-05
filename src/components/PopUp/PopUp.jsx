const PopUp = (props) => {
  return (
    <div className='pop-up border'>
      <p>{props.titleText}</p>
      <p>{props.bodyText}</p>
    </div>
  );
};

export default PopUp;
