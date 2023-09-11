### Conceptual Exercise

Answer the following questions below:

-   What is React? When and why would you use it?

    -   React is a front end framework designed to facilitate front end design using Components

-   What is Babel?
    -   Babel is a conversion transpiler that can convert JSX into browser readable HTML
-   What is JSX?
    -   JSX is a syntax that allows Babel to write HTML using our own written JavaScript
-   How is a Component created in React?
    -   A Component is simply a defined function that returns a rendered HTML element
-   What are some difference between state and props?
    -   props are passed into a Component from the parent Component, and State is something that a component determines itself
-   What does "downward data flow" refer to in React?
    -   Downward dataflow means that a Child copmonent cannot easily pass information up to a Parent. A Child is passed props, but cannot return data back up to a Parent, only if it is passed a function.
-   What is a controlled component?
    -   A controlled component is one where React can maintain state.
-   What is an uncontrolled component?
    -   An uncontrolled component is one that React cannot easily manipulate eg: a file upload field in a form
-   What is the purpose of the `key` prop when rendering a list of components?
    -   The `key` prop is used to make sure each list item is identified and unique
-   Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    -   The array index is not set-in-stone and therefore if the array is changed, React will render things WEIRD
-   Describe useEffect. What use cases is it used for in React components?
    -   useEffect is used for "side effects" which are things that we don't want to be directly related to the rendering of a page. We'd use it for something like an API call that might take awhile and we won't want to re-send it every time we re-render a page
-   What does useRef do? Does a change to a ref value cause a rerender of a component?
    -   useRef is a way to reference the underlying DOM, or another thing that we want to **persist** through re-renders. It does not cause a re-render
-   When would you use a ref? When wouldn't you use one?
    -   Use a ref for timers! use a ref for things react can't control, ie a video
-   What is a custom hook in React? When would you want to write one?
    -   A custom His a versatile thing that can be used to separate a piec of logic from a component. This way we can reuse it!
