import React from "react";

const Canvas = () => {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let isDrawing = false;
    let x = 0;
    let y = 0;

    canvas.addEventListener("mousedown", (e) => {
      x = e.offsetX;
      y = e.offsetY;
      isDrawing = true;
    });

    function drawLine(context, x1, y1, x2, y2) {
      if (!isDrawing) return;
      context.beginPath();
      context.strokeStyle = "#002fa7";
      context.lineWidth = 5;
      context.lineCap = "round";
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }

    canvas.addEventListener("mousemove", (e) => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
      }
    });

    window.addEventListener("mouseup", () => {
      isDrawing = false;
    });
  });

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="display-canvas"
      ></canvas>
    </div>
  );
};
export default Canvas;
