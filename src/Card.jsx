import { useEffect, useState } from "react";

import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";
import Count from "./count";

// TODO:
// - [x] Increase/Decrease counter
// - [x] Increase using space bar
// - [x] Reset button
// - [x] Reset using ESC button
// - Add a limit -> if limit is reached, disabled increase and decrease button.
//   Only the reset button is clickable.
function Card() {
  const title = "Fancy counter";
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Space") {
      handleIncreaseCount(event);
    } else if (event.code === "Escape") {
      handleResetCount();
    }
  };

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
      <Button
        className="reset-button"
        type="reset"
        onClick={handleResetCount}
      />
      <ButtonContainer>
        <Button type="minus" onClick={handleDecreaseCount} />
        <Button type="plus" onClick={handleIncreaseCount} />
      </ButtonContainer>
    </div>
  );
}

export default Card;
