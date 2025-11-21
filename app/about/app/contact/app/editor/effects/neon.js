export function applyNeonEffect(ctx, canvas, color = "#00FFFF") {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  for (let i = 0; i < data.length; i += 4) {
    // Glow effect
    data[i] = Math.min(255, data[i] + 40);     // Red
    data[i + 1] = Math.min(255, data[i + 1]);  // Green
    data[i + 2] = Math.min(255, data[i + 2] + 60); // Blue
  }

  ctx.putImageData(imgData, 0, 0);

  // Outer neon glow
  ctx.globalCompositeOperation = "lighter";
  ctx.shadowColor = color;
  ctx.shadowBlur = 25;
  ctx.drawImage(canvas, 0, 0);
  ctx.globalCompositeOperation = "source-over";
}
