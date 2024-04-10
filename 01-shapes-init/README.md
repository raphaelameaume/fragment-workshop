# Shapes initialization

1. Open the repository in your code editor.
2. Run the following commands in the terminal from the root of this repository:

```bash
cd 01-shapes-init
npx fragment-tools 01-shapes-init.js
```

3. Open the URL prompted by the command line in your browser. You should see something like this:

// TODO screenshot of fragment

4. You can edit the layout as you want to fit your screen and the worfklow of your choice by hittin `W` on the keyboard. Create new columns and rows and select the module you want to appear in the new created spots.

5. In `01-shapes-init.js`, add a `console.log('update')` at the beginning of the `draw()` function. In the browser, open the dev tools in the Console tab. You should see the log appearing at a very fast pace. It's because Fragment is currently running the sketch at 60 fps, so `draw()` is called 60 times per seconds or every 16.6667ms.

6. Since we are not currently looking to animate shapes, we can ask Fragment to run the sketch only once on every change made from the code or from the interface. At the bottom of `01-shapes-init.js`, uncomment the `// export let fps = 0;`. If you edit `01-shapes-init.js` or click on one of the GUI controls, you should see `console.log('update')` appearing in the console of every change and not 60 times per seconds anymore.

7. In your code editor, open `shapes.js` and start replacing `□` by `■` (characters are available at the top of the file) to start creating patterns.

You should see your changes reflected in real-time in the browser whenever you save `shapes.js`.

8. In Fragment, change the dropdown "shape" to accomodate for the shape you are currently editing in the file. Edit `shape1`, `shape2` and `shape3` to find 3 arrangements you like in the 3x3 grid.

9. At the end of `01-shapes-init.js`, you can see another export:

```js
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
```

The `export let props={}` is a way to hook into Fragment interface to build GUI controls on the fly. Based on the `property.value` type and `property.params`, Fragment will infer the type of props you want. Here we have a `<select>` based on `params.options` and a `<input type="checkbox">` based on `showGrid.value` being a boolean.

10. Go to [02-shapes-grid/README.md](./02-shapes-grid/README.md) to continue.
