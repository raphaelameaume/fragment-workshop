import p5 from "p5";
import { shapes } from "../shapes";
import { drawShapeGrid, drawShape } from "../shared";

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

	p.noStroke();
	p.fill(0, 0, 0);
	drawShape(p, shapes[props.shape.value], 0, 0, width, height);

	if (props.showGrid.value) {
		drawShapeGrid(p, width, height);
	}
}

export let rendering = "p5";
// export let fps = 0;

export let props = {
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
		value: true,
	},
};
