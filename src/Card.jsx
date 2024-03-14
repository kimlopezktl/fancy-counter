import Count from "./Count";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";

function Card() {
  return (
    <div className="card">
      <Title />
      <Count />
      <ResetButton />
      <CountButton />
    </div>
  );
}

export default Card;
