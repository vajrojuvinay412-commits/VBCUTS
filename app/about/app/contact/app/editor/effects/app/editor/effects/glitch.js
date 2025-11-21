export function applyGlitchEffect(ctx, canvas) {
  const width = canvas.width;
  const height = canvas.height;

  // Copy image data
  const imageData = ctx.getImageData(0, 0, width, height);

  // Number of glitch slices
  for (let i = 0; i < 15; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const sliceWidth = width - x;
    const sliceHeight = 5 + Math.random() * 30;

    // Random horizontal shift
    const shift = (Math.random() - 0.5) * 30;

    // Draw sliced portion shifted left or right
    ctx.putImageData(
      imageData,
      shift,
      0,
      x,
      y,
      sliceWidth,
      sliceHeight
    );
  }

  // RGB channel separation
  ctx.globalCompositeOperation = "screen";

  ctx.drawImage(canvas, 2, 0);
  ctx.drawImage(canvas, -2, 0);
  ctx.globalCompositeOperation = "source-over";
}
