# Shapes grid

1. Open the repository in your code editor.
2. Run the following commands in the terminal from the root of this repository:

```bash
cd 03-shapes-colors
npx fragment-tools 03-shapes-colors.js
```

3. Open the URL prompted by the command line in your browser. Since we're starting from a new sketch, you might want to copy/paste the explorations made in `02-shapes-grid.js`.

4. Fragment implements different types of _Triggers_. Triggers are function that are called from different user inputs. Right now, Fragment has Mouse, Keyboard and MIDI triggers. They can be defined on the fly from the interface or directly from the code. Let's create a trigger from the interface by clicking on "generate". You should see a new button "Add a new trigger". From the dropdown, select "Mouse", and "onClick" in the second dropdown.

You should be able to click on the canvas and that will have the same effect that clicking on "generate".

5. Let's add a trigger in JavaScript. At the top of the file, let's import a Keyboard trigger from a special alias `@fragment/triggers`.

<!-- Let's see if I can make that work before the workshop -->

```js
import { onKeyPress } from "@fragment/triggers";
```

In the setup function let's call onKeyPress and change the seed again from there:

```js
export let setup = () => {
	onKeyPress("m", () => {
		seed = Math.random() * 1000;
	});
};
```

5. Let's add some colors. At the top of the file, uncomment the line 7. From the "color" dropdown, change the color applied to the shapes.

6. A single color is a bit boring, let's apply a different color per shape from the palette. In the draw() function, let's change `colorIndex` in different ways like we did for the shapes.

```js
// colorIndex = p.floor(p.random(0, colors.length));

// let colorOffset = p.floor(p.random(0, colors.length));
// colorIndex = (cell.col * cell.row) % colors.length;
// colorIndex = (index + colorOffset) % colors.length;
```

6. Great. Now let's change the background color. To pick a color, let's create a controller for it. At the end of the file, add a new property to props:

```js
export let props = {
	//...
	backgroundColor: {
		value: "rgb(255, 255, 255)",
	},
};
```

You should see a new control appear under Parameters with a white rectangle. If you click on it, this will open a color picker. Fragment supports different types of color definition: RGB and HSL strings, hexadecimal strings, objects...

7. We can't see any visible changes on the canvas because we're still not using the value of this prop. Let's change that by passing the value to `p.background()`.

```js
p.background(props.background.value);
```

Now if you change the background color from the interface, you should see the canvas reacting in real-time. Find a color you like and replace its value in the prop definition.
