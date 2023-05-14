import "./Button.scss";

const Button = (props) => {
  return (
    <input
      className={"btn " + props.class}
      type="button"
      value={props.text}
    ></input>
  );
};

export default Button;
