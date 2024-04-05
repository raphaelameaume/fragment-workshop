import p5 from "p5";
import { drawGrid } from "../shared";

/**
 * @param {object} params
 * @param {HTMLCanvasElement} params.canvas
 * @param {p5} params.p
 * @param {number} params.width
 * @param {number} params.height
 * @param {number} params.pixelRatio
 */
export function setup({ p, width, height }) {}

/**
 * @param {object} params
 * @param {HTMLCanvasElement} params.canvas
 * @param {p5} params.p
 * @param {number} params.width
 * @param {number} params.height
 * @param {number} params.pixelRatio
 * @param {number} params.time
 * @param {number} params.deltaTime
 * @param {number} params.frame
 * @param {number} params.playhead
 * @param {number} params.playcount
 */
export function draw({ p, width, height }) {
	p.background(255, 255, 255);

	let count = props.count.value;
	let gap = props.gap.value;
	let margin = props.margin.value;

	function createGrid(
		width,
		height,
		cols = 10,
		rows = 10,
		colGap = 4,
		rowGap = 4,
		margin = 0,
	) {
		let cellSize =
			(Math.min(
				width - colGap * (cols - 1),
				height - rowGap * (rows - 1),
			) -
				margin * 2) /
			count;

		let offsetX = (cellSize * cols + gap * (cols - 1) - width) * 0.5;
		let offsetY = (cellSize * rows + gap * (rows - 1) - height) * 0.5;

		let cells = [];

		for (let i = 0; i < cols; i++) {
			let x = i * cellSize - offsetX + i * gap;
			for (let j = 0; j < rows; j++) {
				let y = j * cellSize - offsetY + j * gap;

				let cell = {
					x,
					y,
					size: cellSize,
				};

				cells.push(cell);
			}
		}

		return cells;
	}

	const grid = createGrid(width, height, count, count, gap, gap, margin);

	if (props.showGrid.value) {
		drawGrid(p, grid);
	}
}

export let rendering = "p5";
export let fps = 0;

export let props = {
	margin: {
		value: 10,
		params: {
			min: 0,
			max: 100,
			step: 1,
		},
	},
	count: {
		value: 10,
		params: {
			min: 1,
			max: 20,
		},
	},
	gap: {
		value: 4,
		params: {
			min: 0,
			max: 10,
		},
	},
	showGrid: {
		value: true,
	},
};
