import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ onClick = {} }) {
  return (
    <button className="reset-button" onClick={onClick}>
      <ResetIcon className="reset-button-icon" />
    </button>
  );
}

export default ResetButton;
