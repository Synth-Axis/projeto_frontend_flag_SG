import "./Button.scss";

const Button = (props) => {
  return (
    <input
      className={"btn " + props.section}
      type="button"
      value={props.text}
    ></input>
  );
};

export default Button;
