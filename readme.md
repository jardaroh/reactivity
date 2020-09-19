# reactivity

:warning: DO NOT USE for production, this is just for playing around

:warning: will not work with IE11 or older browsers as this package relies
on the Proxy API

A small package for creating reactive props and watchers

### Example - The obligatory clicker
Given an HTML page served from a location where the library is accessible via
`/js/index.js`

:warning: will only work in modern browsers
```html
<p>0</p> <!-- This paragraph will be updated -->
<button></button> <!-- This button updates the paragraph -->
<script type="module">
import { obs, watch } from '/js/index.js';

const a = obs(0); // Creates an "observable" object
// register a watcher function on our "obserbable" object
watch(a, (oldValue, newValue) => {
  // when `a` changes update our paragraph with the value of `newValue`
  document.querySelector('p').innerText = newValue;
});

document.querySelector('button').addEventListener('click', () => {
  a.value = a.value + 1; // setting the value will also execute any registered watchers
});
</script>
```
