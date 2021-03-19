import React from "react";

import { useSpring, animated } from "react-spring";
import "./image.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Image({ img, gif, name, onClick, showGif }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 4, tension: 450, friction: 40 },
  }));
  return (
    <animated.img
      key={name}
      src={showGif.value ? gif : img}
      alt={name}
      onClick={onClick}
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseEnter={showGif.setTrue}
      onMouseOut={showGif.setFalse}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    />
  );
}

export default Image;
