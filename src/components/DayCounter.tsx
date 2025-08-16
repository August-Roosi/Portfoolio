import { useEffect, useState } from "react";

function DayCounter({ startDate }: { startDate: string }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const updateDays = () => {
      const diff = Math.floor(
        (new Date().getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24 * 364)
      );
      setDays(diff);
    };

    updateDays(); // run once immediately
    const timer = setInterval(updateDays, 1000 * 60 * 60); // update every hour
    return () => clearInterval(timer);
  }, [startDate]);

  return <p> {days} </p>;
}

export default DayCounter;
