import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function CountButton() {
  return (
    <div className="count-container">
      <button className="count-button">
        <PlusIcon className="plus-button-icon" />
      </button>
      <button className="count-button">
        <MinusIcon className="minus-button-icon" />
      </button>
    </div>
  );
}

export default CountButton;
