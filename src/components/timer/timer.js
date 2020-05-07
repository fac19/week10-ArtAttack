import React from "react";

const Timer = () => {
  const [counter, setCounter] = React.useState(30000);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 10);
  }, [counter]);

  return (
    <div className="timer-container">
      <div>00:{counter}</div>
    </div>
  );
};

export default Timer;

//Page refreshes once the time is up
//The background colour of the refresh button changes
//There should be a button
