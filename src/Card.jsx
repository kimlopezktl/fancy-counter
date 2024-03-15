import { useState } from "react";

import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";
import Count from "./count";

// TODO:
// - [x] Increase/Decrease counter
// - Increase using space bar
// - [x] Reset button
// - Reset using ESC button
// - Add a limit -> if limit is reached, disabled increase and decrease button.
//   Only the reset button is clickable.
function Card() {
  const title = "Fancy counter";
  const [count, setCount] = useState(0);

  const handleResetCount = () => {
    setCount(0);
  };

  const handleIncreaseCount = (event) => {
    setCount(count + 1);
    event.currentTarget.blur();
  };

  const handleDecreaseCount = (event) => {
    if (count > 0) {
      setCount(count - 1);
    }
    event.currentTarget.blur();
  };

  return (
    <div className="card">
      <Title title={title} />
      <Count count={count} />
      <ResetButton onClick={handleResetCount} />
      <ButtonContainer>
        <Button type="minus" onClick={handleDecreaseCount} />
        <Button type="plus" onClick={handleIncreaseCount} />
      </ButtonContainer>
    </div>
  );
}

export default Card;
