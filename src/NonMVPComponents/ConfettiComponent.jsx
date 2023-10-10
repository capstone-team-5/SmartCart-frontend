import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const confettiWidth = window.innerWidth;
  const confettiHeight = window.innerHeight;

  return (
    <div>
      <Confetti
        width={confettiWidth}
        height={confettiHeight}
        numberOfPieces={showConfetti ? 2000 : 0}
        recycle={false}
      />
    </div>
  );
};

export default ConfettiComponent;
