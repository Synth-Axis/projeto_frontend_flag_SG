import "./Input.scss";

const Input = (props) => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      className={props.class}
      type={props.type}
      placeholder={props.placeholder}
    ></input>
  );
};

export default Input;
