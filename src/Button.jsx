import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
export default function Button({
  type = "",
  className = "",
  onClick = null,
  locked = false,
}) {
  return (
    <button
      className={classNames({ disabled: locked, [className]: true })}
      onClick={onClick}
      disabled={locked}
    >
      {type === "plus" && <PlusIcon className="plus-button-icon" />}
      {type === "minus" && <MinusIcon className="minus-button-icon" />}
      {type === "reset" && <ResetIcon className="reset-button-icon" />}
    </button>
  );
}
