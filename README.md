The purpose of this repo is a systematically review the fundamentals react and learn some new features of react18:

1. practice-00 - how to create and render component.

2. practice-01 - basic use of react that shows how to create a static page. Used props to transfer the data from parent to child(props only works top to button->parent to child); used ES6 deconstruct method to deal with data; used two import and export ways from ES6. Be careful: when we iterate data in react, we need to use the unique id as key.

3. practice-02 - show case of useState hook. At the beginning, use the FirstExample component to demonstrate React cannot automatically re-render the data on page when we change the data value by clicking the button.
Then use the FirstUseState component to demonstrate how to use the useState hook to re-render the data.
Added Toggle component to show how the short circuit and ternary of javascript works in React.
### useState hook:
* useState return an array with two elements: the current state value, and a function that use to update the state.
* State update will triggers re-render.
* when we use the setState function to update the state, the previous state is not lost (or covered), it still in the memory.
Added UseStatePractice component to show how useState hook work with array. Used filter method in this example, which is similar with map method, must return a new array.
* Short circuit: 
1. The && operator returns the first operand if it is a falsy value, or the second operand if the first operand is a truthy value.
2. The || operator returns the first operand if it is a truthy value, or the second operand if the first operand is a falsy value.
* Ternary: (basic syntax)
``` javascript
condition ? expression1 : expression2
```
If ths condition is true, the operator will return expression1. If the condition is false, it will return expression2.

4. practice-03 - show case of useEffect hook.
### useEffect hook:
* Since the useState leads to re-render every time when we update the data(It can cause infinite loop if we use setValue function in an function which called in the component), it may not what we want in some case, for example, we only want a function be called once when the component mounted. Therefore, this is why useEffect is important.

