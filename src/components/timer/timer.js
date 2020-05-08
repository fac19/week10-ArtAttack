import React from "react";

const Timer = () => {
  const [counter, setCounter] = React.useState(30);

  React.useEffect(() => {
    const refresh = () => {
      return counter !== 0 ? console.log(counter) : window.location.reload();
    };

    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  function refreshPage() {
    window.location.reload();
  }

  React.useEffect(() => {
    setTimeout(() => {
      refreshPage();
    }, 30000);
  });

  return (
    <div className="timer-container">
      <p className="timer-text">Remaining {counter} seconds</p>
      <button onClick={refreshPage}>
        Show me a different artwork{" "}
        <span role="img" aria-label="eyes">
          👀
        </span>
      </button>
    </div>
  );
};

export default Timer;

//Page refreshes once the time is up
//The background colour of the refresh button changes
//There should be a button
