export function applyVhsEffect(ctx, canvas) {
  const width = canvas.width;
  const height = canvas.height;

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  // Scanline + noise effect
  for (let y = 0; y < height; y++) {
    const isScanline = y % 2 === 0;

    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;

      // Slight color distortion
      data[i] += Math.random() * 10;       // R
      data[i + 1] += Math.random() * 5;    // G
      data[i + 2] += Math.random() * 10;   // B

      // Horizontal shaking
      if (Math.random() > 0.99) {
        data[i] = data[i + 10] || data[i];
      }

      // Dark scanline
      if (isScanline) {
        data[i] *= 0.9;
        data[i + 1] *= 0.9;
        data[i + 2] *= 0.9;
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);

  // Slight blur for retro TV look
  ctx.globalAlpha = 0.2;
  ctx.drawImage(canvas, -1, 0);
  ctx.drawImage(canvas, 1, 0);
  ctx.globalAlpha = 1;
}
