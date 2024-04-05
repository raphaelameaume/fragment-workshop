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
