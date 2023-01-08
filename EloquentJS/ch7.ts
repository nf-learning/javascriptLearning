drawGrid(5,5);
function drawGrid(rows: number, columns: number) {
  let canvas = document.getElementById('canvas') as HTMLCanvasElement;

  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');

  const cellWidth = canvas.width / columns;
  const cellHeight = canvas.height / rows;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      ctx.strokeRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
    }
  }
}
