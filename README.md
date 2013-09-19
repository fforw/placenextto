jQuery placeNextTo v1.0
=======================

jQuery plugin to place one element next to another somewhat independently of the surrounding CSS.

Example:
--------
```javascript
$('<div class="marker"></div>').placeNextTo(".target", "left");
```

Would place ".marker" element next to left of the first ".target" found.

Prerequisites:

The element inserted must be absolute positioned, only the left and top CSS properties are changed and the element is detached and 
reattached at a convenient position in the document.

The positioning should work in any kind of container with only one further condition: If you introduce a scrolling container, you
have to set the CSS position property to anything but "static" (e.g. with a simple "position: relative; left: 0; top: 0;" on that container)  

Test:
-----

test.html is a very basic non-automated test for a selected number of scenarios. Each input field is supposed to have a 4x4 pink dot to the right
on the same height, scrolling with the element.
