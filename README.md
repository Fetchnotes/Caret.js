![Caret.js](http://i.imgur.com/w8fvhs8.png)
Measure the position of the caret of a text input, relative to the page or to
the input. No dependencies needed.

### Demo
You can check out a nifty demo [here](http://plnkr.co/edit/r3mvs6PEvTDFZEhnuoPY?p=preview).

### Usage

```javascript

var textarea = document.getElementById('#myTextarea');

var caret = new Caret(textarea)

textarea.onkeyup = function(event) {
  console.log(caret.position); // Prints out position object {x: int, y: int}
};

````
