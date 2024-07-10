import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function FormatDigit(digit) {

    return digit >= 10 ? digit : `0${digit}`;
  }

  function FormatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    return `${FormatDigit(hours)}:${FormatDigit(minutes)}:${FormatDigit(seconds)} ${meridiem}`;
  }

  return <div className="clock-container">
    <div className="clock">
      <span>{FormatTime()}</span>
    </div>
  </div>
}

export default DigitalClock;