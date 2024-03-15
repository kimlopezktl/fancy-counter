import { MinusIcon, PlusIcon, ResetIcon } from "@radix-ui/react-icons";

export default function Button({ type = "", className = "", onClick = null }) {
  return (
    <button className={className} onClick={onClick}>
      {type === "plus" && <PlusIcon className="plus-button-icon" />}
      {type === "minus" && <MinusIcon className="minus-button-icon" />}
      {type === "reset" && <ResetIcon className="reset-button-icon" />}
    </button>
  );
}
