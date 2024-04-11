import p5 from "p5";
import { createGridCells, drawGrid, drawShape } from "../shared";
import { shapes } from "../shapes";

// https://coolors.co/
let colors = ["000000"];
colors = ["9c89b8", "f0a6ca", "efc3e6", "f0e6ef", "b8bedd"];

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
export function draw({ p, width, height, playhead, playcount }) {
	p.randomSeed(seed);
	p.background(props.backgroundColor.value);

	let count = props.count.value;
	let gap = props.gap.value;
	let margin = props.margin.value;

	// gap = (Math.sin(playhead * Math.PI * 4) + 1) * 0.5 * 40;
	// margin = (Math.sin(playhead * Math.PI * 4 + Math.PI) + 1) * 0.5 * 20;

	const cells = createGridCells(
		width,
		height,
		count,
		count,
		gap,
		gap,
		margin,
	);

	if (props.showGrid.value) {
		drawGrid(p, cells);
	}

	let shapeOffset = p.floor(p.random(0, shapes.length));

	let colorIndex = props.color.value;

	cells.forEach((cell, index) => {
		// p.randomSeed(`${seed}${cell.col * 1000 + cell.row * 1000}`);
		p.noStroke();
		p.fill(0);

		let shape = 0;
		// shape += p.floor(p.random(0, shapes.length));
		shape +=
			((cell.row + p.floor(playhead * props.count.value)) %
				props.count.value) %
			shapes.length;
		shape += cell.col % shapes.length;
		shape %= shapes.length;
		// shape = (index + shapeOffset) % shapes.length;
		// shape = cell.col % shapes.length;

		colorIndex = p.floor(p.random(0, colors.length));

		let color = colors[colorIndex];

		p.noStroke();
		p.fill(`#${color}`);

		drawShape(p, shapes[shape], cell.x, cell.y, cell.size, cell.size);
	});
}

export let rendering = "p5";

let seed = 0;

export let props = {
	margin: {
		value: 100,
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
	shape: {
		value: 0,
		params: {
			options: shapes.map((shape, index) => ({
				label: `shape ${index + 1}`,
				value: index,
			})),
		},
	},
	showGrid: {
		value: false,
	},
	color: {
		value: 0,
		params: {
			options: colors.map((color, index) => ({
				label: `#${color}`,
				value: index,
			})),
		},
	},
	backgroundColor: {
		value: "#000000",
	},
	generate: {
		value: () => {
			seed = Math.random() * 1000;
		},
	},
};

// export let exportDir = `./exports`;
export let fps = 60;
export let duration = 1;
