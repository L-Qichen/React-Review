The purpose of this repo is a systematically review the fundamentals react and learn some new features of react18:

1. practice-00 - how to create and render component.

2. practice-01 - basic use of react that shows how to create a static page. Used props to transfer the data from parent to child(props only works top to button->parent to child); used ES6 deconstruct method to deal with data; used two import and export ways from ES6. Be careful: when we iterate data in react, we need to use the unique id as key.

3. practice-02 - show case of useState hook. At the beginning, use the FirstExample component to demonstrate React cannot automatically re-render the data on page when we change the data value by clicking the button.
Then use the FirstUseState component to demonstrate how to use the useState hook to re-render the data.
### useState hook:
* useState return an array with two elements: the current state value, and a function that use to update the state.
* State update will triggers re-render.
* when we use the setState function to update the state, the previous state is not lost (or covered), it still in the memory.



