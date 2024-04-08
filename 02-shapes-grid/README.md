# Shapes grid

1. Open the repository in your code editor.
2. Run the following commands in the terminal from the root of this repository:

```bash
cd 02-shapes-grid
npx fragment-tools 02-shapes-grid.js`
```

3. Open the URL prompted by the command line in your browser. You should see new GUI controls that you can play with: `count`, `margin`, `gap`.

4. Scroll to the bottom of `02-shapes-grid.js`. You can see that Fragment creates a input number with a slider based on the type of `count`, `margin`, `gap` values. Comment the `params` object of one of them to hide the slider.

5. In the browser, hit `Cmd+S` on Mac or `Ctrl+S` on the keyboard to save a screenshot of the canvas. You should see it appear on your filesystem. In the Exports module of Fragment interface (hit W again and make some space for it in the layout if you hide it previously), change the image format to suit your needs.

6. In order to keep things tidy and not bloat the entire repository, let's add:

```
export let exportDir = `./exports`;
```

7. We want to test different ways to distribute the 3 shapes inside the grid instead of only having one. To do that, we can play with the variable `shape` L53 to change the shape, based on the index of the cell.

```js
// alternate between the 3 shapes based on the column index of the cell
shape = cell.col % shapes.length;
// alternate between the 3 shapes based on the row index of the cell
shape = cell.row % shapes.length;
// compute shapes in any you want just make sure it will always equals to 0, 1 or 2.
shape = (cell.row + cell.col) % shapes.length;
```

8. Let's add random into the mix.

```js
shape = p.floor(p.random(0, shapes.length));
```

Problem is, if you play with the controls parameters, the shape distribution always changes. To fix that, we need to use a _seed_ to always start the pseudo random number generator at "the same place".

9. Create a variable `seed` at the top of the file.

```js
let seed = 0;
```

At the beginning of `draw()`, pass the seed to p5.js `randomSeed()` function.

```js
export let draw = ({ p }) => {
	p.randomSeed(seed);

	// ...
};
```

Now if you edit the `margin` or the `gap` the shapes stays the same. Let's add a control to loop through different results.

In `02-shapes-grid.js`, add a new property to the `props` object at the end of the file called `generate` with the value being a function changing the seed.

```js
export let props = {
	// ...
	generate: {
		value: () => {
			seed = Math.random() * 1000;
		},
	},
};
```

Since the type of `value` is a function, Fragment will generate a button that calls the function passed as `value` on every click.
