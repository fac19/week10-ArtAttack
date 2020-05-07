import React from "react";

const Canvas = () => {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let isDrawing = false;
    let x = 0;
    let y = 0;
    let hue = 0;

    canvas.addEventListener("mousedown", (e) => {
      x = e.offsetX;
      y = e.offsetY;
      isDrawing = true;
    });

    function drawLine(drawing, x1, y1, x2, y2) {
      if (!isDrawing) return;
      drawing.strokeStyle = `hsl(${hue}, 80%, 50%)`;
      drawing.beginPath();
      // drawing.strokeStyle = "#002fa7";
      drawing.lineWidth = 5;
      drawing.lineCap = "round";
      drawing.lineJoin = "round";
      drawing.moveTo(x1, y1);
      drawing.lineTo(x2, y2);
      drawing.stroke();
      drawing.closePath();
      hue++;
      console.log(hue);
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
        className="canvas-display"
      ></canvas>
    </div>
  );
};
export default Canvas;
