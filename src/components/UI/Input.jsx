import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input onChange={props.onChange} value={props.value} {...props.input} />
    </div>
  );
};

export default Input;
