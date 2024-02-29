import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useState } from "react";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(0);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (amount < 1 || amount > 5) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
      props.onAddToCart(amount);
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        onChange={amountChangeHandler}
        value={amount}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          step: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>please enter from (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
