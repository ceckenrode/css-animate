## CSS Shapes!

### Squares and Rectangles

* Squares and rectangles are fairly straight-forward. We simply give and element a `height` and a `width` and it's rectangular shaped. If the `width` and `height` are the same, we get a square, otherwise we get a rectangle.

  ![CSS Square CSS](images/01-Square-CSS.png)
  ![CSS Rectangle](images/02-Square.png)

### Circles and Ovals

* Circles and ovals are less obvious. To make an element round, we adjust it's `border-radius` property. An element with equal height, equal width, and a `boder-radius` of 50%.

  ![CSS Circle CSS](images/03-Circle-CSS.png)
  ![CSS Circle](images/04-Circle.png)

* To make an element an oval, we just change it's height or width so they're different.

  ![CSS Oval CSS](images/05-Oval-CSS.png)
  ![CSS Oval](images/06-Oval.png)

### Triangles

* This is possible the most difficult to understand CSS shape. Here it would be easier to show you how it can be done before trying to explain.

  ![CSS Triangle CSS](images/07-Triangle-CSS.png)
  ![CSS Triangle](images/08-Triangle.png)

* Every HTML element has 4 borders (even if we don't style them), regardless of it's shape: left, top, right, and bottom. We can see this is the case if we were to inspect the triangle in Chrome inspector:

  ![CSS Triangle Inspect](images/09-Triangle-Inspect.png)

* Here we can see the rectangular outline of the triangle div.

* **Q: Okay, it's a square, but how do we make it look like a triangle?**
  * **A: We give the element a `height` and `width` of 0, and give define three borders and set the length for each. Two of the borders are transparent. One border has a color. 

  * Essentially what's happening is because the element **wants** to be a square, but we've set its `height` and `width` to 0, **but** we've given the borders a length, we get a shape that's only it's borders, which want to connect in the middle. 

  * Can you tell why we only gave one of the borders a color and made the rest transparent?

    ![Triangle Three Borders](images/10-Triangle-Three-Borders.png)

  * Let's see what happens when we add the fourth border and color it in:

    ![Triangle Four Borders CSS](images/11-Triangle-Four-Borders-CSS.png)
  
    ![Triangle Four Borders](images/12-Triangle-Four-Borders.png)
  
  * You can adjust the triangle's angles by changing the lengths of the different borders. You only need to style 3 borders for this to work, just include make sure the border you'd like to set as the base of your triangle is colored in!
