import "./Input.scss";

const Input = (props) => {
  return (
    <input
      className={props.class}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    ></input>
  );
};

export default Input;
