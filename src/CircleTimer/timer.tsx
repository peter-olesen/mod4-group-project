import React, { useEffect, useState } from "react";

export const CircleTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(10);

  // Update the timer every second
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  return (
    <div className="flex justify-center items-center h-screen">
      <svg width="200" height="200" viewBox="0 0 100 100">
        {/* Outer circle */}
        {/* <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#D9D9D9"
          strokeWidth="10"
        /> */}
        {/* Segments */}
        {Array.from({ length: 10 }).map((_, index) => (
          <Segment key={index} index={index} isActive={index < 10 - timeLeft} />
        ))}
      </svg>
    </div>
  );
};

type SegmentProps = {
  index: number;
  isActive: boolean;
};

const Segment: React.FC<SegmentProps> = ({ index, isActive }) => {
  const angle = (index / 10) * 360; // Angle for each segment
  const startAngle = angle - 90; // Adjust for SVG starting at 3 o'clock
  const endAngle = startAngle + 36.5; // Slightly increase for overlap

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const x1 = 50 + 45 * Math.cos((startAngle * Math.PI) / 180);
  const y1 = 50 + 45 * Math.sin((startAngle * Math.PI) / 180);
  const x2 = 50 + 45 * Math.cos((endAngle * Math.PI) / 180);
  const y2 = 50 + 45 * Math.sin((endAngle * Math.PI) / 180);

  const pathData = `
    M 50 50
    L ${x1} ${y1}
    A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2}
    Z
  `;

  return (
    <path
      d={pathData}
      fill={isActive ? "#D9D9D9" : "transparent"}
      stroke="none"
      shapeRendering="geometricPrecision" // Helps with rendering artifacts
    />
  );
};

export default CircleTimer;
