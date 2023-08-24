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
* The useEffect hook accepts two arguments(second optional - if no second optional, then it default run on each render which means initial render and re-render)
  - first argument is a callback function
  - second argument is the dependency array
  - remember that callback function(first argument) cannot return a promise(so cannot make it async)
  - if the dependency array(second argument) is an empty array[], it will only run on initial render
* Therefore, the common use case of useEffect hook are:
subscriptions, fetching data, directly updating the DOM, event listeners timers...

5. practice-04 - show case of props and show that order matters in JS.
### JS syntax:
* we cannot pull out properties from null. Therefore, if we have some code like : const [value, setValue] = useState(null). Then we have to make sure that before we destructure properties of value, there are something store in value state(value cannot be null). Otherwise, javascript will complain and show an error on console.

6. practice-05 - show case of controlled inputs.
### controlled inputs:
* When we use form in our web page, in html the <input> labels will hold their own states and update the value by user's input. In react, we can store input values in states(which come from useState hook) to control(track) the values, which is called controlled inputs. It implements in three steps:
  - setup state values
  - add value property and onChange event to each input
  - setup onSubmit event to submit button
* if we have multiple inputs, we can use an object state value to store them, each input value associate a property of the object. In this case, each input label must have an name property use to identify which input value is changed.

7. practice-06 - show case of useRef.
### useRef hook:
* Common between useRef and useState hooks:
  - preserves the value between renders
* Difference between useRef and useState hooks:
  - useRef hook don't trigger the re-render
  - useRef returns an object with a ***current*** property
  Thats why we can think useRef more like a container, which can use its current property to carry any object. Therefore, one common use case is using useRef to target a DOM node or element. For example: using ref property of <input> to implement uncontrolled inputs.

8. practice-07 - show case of custom hook.
### custom hook:
* basically custom hook is encapsulation the variables(could be state, reducer, etc) and logic (functions and actions) together for reuse it in an other components.

9. practice-08 - show case of props drilling and useContext.
### props drilling:
* normally when we use props pass the attributes to a component's grandchild, we have to do this way: parent -> children -> grand-children. Even if we don't want to use the data in children component. This is called props drilling.
### useContext hook:
* useContext hook is use to avoid props drilling. It allowed us to pass the props directly from parent to grand-children. The steps is as following:
 - first step, use createContext API to create a context then export this context to allowed other components to use it 
 - second step, use useContext hook in the children components to use the context which you create in the parent component 
 - third step, provide the context you created in parent component and wrap the children components by context.Provider. The props pass by the value property of <context.Provider>.
 *** Ps: the context.Provider has a value property, which use to past the parameter(usually is a object) for let children components to use ***

