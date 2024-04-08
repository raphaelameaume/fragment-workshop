import p5 from "p5";

export const countX = 3;
export const countY = 3;

/**
 * Draw a single shape
 * @param {p5} p
 * @param {number} posX
 * @param {number} posY
 * @param {number} width
 * @param {number} height
 */
export function drawShape(p, shape, posX, posY, width, height) {
	let rows = shape.trim().split("\n");

	let cellWidth = width / countX;
	let cellHeight = height / countY;

	for (let i = 0; i < countY; i++) {
		let y = i * cellHeight;
		let row = rows[i];
		let cols = row.trim().split(" ");
		for (let j = 0; j < countX; j++) {
			let x = j * cellWidth;
			let shape = cols[j];

			if (shape === "■") {
				p.rect(
					posX + x,
					posY + y,
					Math.ceil(cellWidth),
					Math.ceil(cellHeight),
				);
			}
		}
	}
}

export function drawShapeGrid(p, width, height) {
	let cellWidth = Math.ceil(width / countX);
	let cellHeight = Math.ceil(height / countY);

	p.stroke(255, 0, 0);
	p.noFill();
	p.strokeWeight(2);

	for (let i = 1; i < countX; i++) {
		let x = i * cellWidth;

		p.line(x, 0, x, height);
	}

	for (let j = 1; j < countY; j++) {
		let y = j * cellHeight;

		p.line(0, y, width, y);
	}
}

export function drawGrid(p, cells, color = "rgb(255, 0, 0)") {
	for (let i = 0; i < cells.length; i++) {
		let cell = cells[i];

		p.stroke(color);
		p.noFill();
		p.rect(cell.x, cell.y, cell.size, cell.size);
	}
}

export function createGridCells(
	width,
	height,
	cols = 10,
	rows = 10,
	colGap = 4,
	rowGap = 4,
	margin = 0,
) {
	let cellSize = Math.min(
		(width - colGap * (cols - 1) - margin * 2) / cols,
		(height - rowGap * (rows - 1) - margin * 2) / rows,
	);

	let offsetX = (cellSize * cols + colGap * (cols - 1) - width) * 0.5;
	let offsetY = (cellSize * rows + rowGap * (rows - 1) - height) * 0.5;

	let cells = [];

	for (let i = 0; i < cols; i++) {
		let x = i * cellSize - offsetX + i * colGap;
		for (let j = 0; j < rows; j++) {
			let y = j * cellSize - offsetY + j * rowGap;

			let cell = {
				col: i,
				row: j,
				x,
				y,
				size: cellSize,
				cols,
				rows,
			};

			cells.push(cell);
		}
	}

	return cells;
}
