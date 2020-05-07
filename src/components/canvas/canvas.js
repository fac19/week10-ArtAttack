import React from "react";

const Canvas = () => {
  let isDrawing = false;
  let x = 0;
  let y = 0;
  React.useEffect(() => {
    console.log("canvas");
  });

  return <canvas className="display-Canvas"></canvas>;
};

export default Canvas;

// THIS IS ANOTHER STRUCTURE FOR LEARNING..
// import React from "react";

// const Canvas = ({ width, height }) => {
//   const canvasRef = React.useRef(null);

//   const [isPainting, setIsPainting] = React.useState(false);
//   const [mousePosition, setMousePosition] = React.useState(undefined);

//   const startPaint = React.useCallback((event) => {
//     const coordinates = getCoordinates(event);
//     if (coordinates) {
//       setIsPainting(true);
//       setMousePosition(coordinates);
//     }
//   }, []);

//   React.useEffect(() => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas = canvasRef.current;
//     canvas.addEventListener("mousedown", startPaint);
//     return () => {
//       canvas.removeEventListener("mousedown", startPaint);
//     };
//   }, [startPaint]);

//   const getCoordinates = (event) => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas = canvasRef.current;
//     return event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop;
//   };

//   const paint = React.useCallback(
//     (event) => {
//       if (isPainting) {
//         const newMousePosition = getCoordinates(event);
//         if (mousePosition && newMousePosition) {
//           drawLine(mousePosition, newMousePosition);
//           setMousePosition(newMousePosition);
//         }
//       }
//     },
//     [isPainting, mousePosition]
//   );

//   React.useEffect(() => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas = canvasRef.current;
//     canvas.addEventListener("mousemove", paint);
//     return () => {
//       canvas.removeEventListener("mousemove", paint);
//     };
//   }, [paint]);

//   const exitPaint = React.useCallback(() => {
//     setIsPainting(false);
//   }, []);

//   React.useEffect(() => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas = canvasRef.current;
//     canvas.addEventListener("mouseup", exitPaint);
//     canvas.addEventListener("mouseleave", exitPaint);
//     return () => {
//       canvas.removeEventListener("mouseup", exitPaint);
//       canvas.removeEventListener("mouseleave", exitPaint);
//     };
//   }, [exitPaint]);

//   const drawLine = (originalMousePosition, newMousePosition) => {
//     if (!canvasRef.current) {
//       return;
//     }
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     if (context) {
//       context.strokeStyle = "black";
//       context.lineJoin = "round";
//       context.lineWidth = 5;
//       context.beginPath();
//       context.moveTo(originalMousePosition.x, originalMousePosition.y);
//       context.lineTo(newMousePosition.x, newMousePosition.y);
//       context.closePath();
//       context.stroke();
//     }
//   };

//   return (
//     <canvas
//       className="display-canvas"
//       ref={canvasRef}
//       height={height}
//       width={width}
//     />
//   );
// };

// Canvas.defaultProps = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// export default Canvas;
