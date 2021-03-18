// import React from "react";
// import { useSpring, animated } from "react-spring";
// import "./image.css";

// const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 20,
//   (x - window.innerWidth / 2) / 20,
//   1.1,
// ];
// const trans = (x, y, s) =>
//   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// const myStyles = {
//   card: {
//     width: "45ch",
//     height: "45ch",
//     borderRadius: "5px",
//     backgroundImage: `1url()`,
//     boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
//     transition: "boxShadow 0.5s",
//     willChange: "transform",
//   },
//   "card:hover": {
//     boxShadow: `0 30 100 -10 rgba(0, 0, 0, 0.4)`,
//   },
//   transform: "props.xys.interpolate(trans)",
// };

// function Image() {
//   const [props, set] = useSpring(() => ({
//     xys: [0, 0, 1],
//     config: { mass: 5, tension: 350, friction: 40 },
//   }));
//   return (
//     <animated.div
//       src={source}
//       className="card-img-top img"
//       alt="name"
//       //   className="card"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={myStyle}
//     />
//   );
// }

// const myStyle = {
//   card: {
//     width: "45ch",
//     height: "45ch",
//     borderRadius: "5px",
//     backgroundImage: `1url("./quiz-sm-questions.png")`,
//     boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
//     transition: "boxShadow 0.5s",
//     willChange: "transform",
//   },
//   "card:hover": {
//     boxShadow: `0 30 100 -10 rgba(0, 0, 0, 0.4)`,
//   },
// };

// export default Image;
