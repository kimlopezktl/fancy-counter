import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Button({ type = "", onClick = null }) {
  return (
    <button onClick={onClick}>
      {type === "plus" ? (
        <PlusIcon className="plus-button-icon" />
      ) : (
        <MinusIcon className="minus-button-icon" />
      )}
    </button>
  );
}
